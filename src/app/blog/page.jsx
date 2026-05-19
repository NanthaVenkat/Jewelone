import Image from "next/image";
import Link from "next/link";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Our Blog | JewelOne",
};

// Simple Arrow Icon component
const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="tw:w-5 tw:h-5 tw:shrink-0 tw:text-gray-900 tw:transition-transform group-hover:tw:translate-x-1 group-hover:-tw:translate-y-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

const getTagColor = (index) => {
  const colors = [
    "tw:bg-pink-50 tw:text-pink-600 tw:border-pink-200",
    "tw:bg-purple-50 tw:text-purple-600 tw:border-purple-200",
    "tw:bg-orange-50 tw:text-orange-600 tw:border-orange-200",
    "tw:bg-green-50 tw:text-green-600 tw:border-green-200",
    "tw:bg-blue-50 tw:text-blue-600 tw:border-blue-200",
  ];
  return colors[index % colors.length];
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default async function BlogPage() {
  await dbConnect();
  // Fetch active blogs sorted by newest first
  const blogs = await Blog.find({ isActive: true }).sort({ createdAt: -1 }).lean();

  // If there are no blogs, gracefully show empty state
  if (!blogs || blogs.length === 0) {
    return (
      <>
        <Navbar />
        <main className="tw:bg-[#F2EDE4] tw:min-h-screen tw:py-16">
          <div className="container tw:max-w-7xl tw:mx-auto tw:px-4 tw:md:px-10 tw:lg:px-16 tw:text-center">
            <h1 className="alga-font tw:text-4xl tw:md:text-5xl tw:mb-4 tw:text-[#2D2D2D]">Our Blog</h1>
            <p className="tw:text-gray-500 tw:mt-8">No blogs published yet. Check back soon!</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // The first 3 are "Recent"
  const recentBlogs = blogs.slice(0, 3);
  // The rest are "All blog posts"
  // If there are less than 4 blogs, we can still show them in "All blogs" if we want,
  // but usually it's best to show all blogs in the second section, or just the remaining ones.
  // The design implies a separation. We will use blogs.slice(3) for 'All blog posts'.
  const allBlogs = blogs.slice(3).length > 0 ? blogs.slice(3) : blogs; 

  return (
    <>
      <Navbar />
      <main className="tw:bg-[#F2EDE4] tw:min-h-screen tw:pt-12 tw:pb-24">
      <div className="container tw:max-w-7xl tw:mx-auto tw:px-4 tw:md:px-10 tw:lg:px-16">
        
        {/* Page Title */}
        <div className="tw:text-center tw:mb-16">
          <h1 className="alga-font tw:text-4xl tw:md:text-5xl tw:text-[#2D2D2D]">Our Blog</h1>
        </div>

        {/* Recent Blog Posts Section */}
        {recentBlogs.length > 0 && (
          <section className="tw:mb-20">
            <h2 className="alga-font tw:text-2xl tw:md:text-3xl tw:text-[#2D2D2D] tw:mb-8">Recent blog posts</h2>
            
            <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-2 tw:gap-8">
              {/* Left Featured Post */}
              {recentBlogs[0] && (
                <Link href={`/blog/${recentBlogs[0].slug}`} className="tw:group tw:flex tw:flex-col tw:no-underline tw:text-inherit">
                  <div className="tw:w-full tw:aspect-[16/9] tw:relative tw:mb-6 tw:overflow-hidden tw:rounded-sm">
                    {recentBlogs[0].heroImg ? (
                      <Image src={recentBlogs[0].heroImg} alt={recentBlogs[0].title} fill className="tw:object-cover group-hover:tw:scale-105 tw:transition-transform tw:duration-500" />
                    ) : (
                      <div className="tw:w-full tw:h-full tw:bg-[#d3d4d6]"></div>
                    )}
                  </div>
                  <div className="tw:text-[#964A26] tw:font-semibold tw:text-sm tw:mb-3">
                    {recentBlogs[0].authorName} • {formatDate(recentBlogs[0].createdAt)}
                  </div>
                  <div className="tw:flex tw:justify-between tw:items-start tw:mb-3">
                    <h3 className="alga-font tw:text-2xl tw:text-[#2D2D2D] tw:pr-4">{recentBlogs[0].title}</h3>
                    <ArrowUpRight />
                  </div>
                  <p className="tw:text-[#6d6d6d] tw:text-sm tw:mb-5 tw:line-clamp-2">
                    {recentBlogs[0].subtitle || recentBlogs[0].shortBio}
                  </p>
                  <div className="tw:flex tw:flex-wrap tw:gap-2">
                    {recentBlogs[0].genres?.map((genre, idx) => (
                      <span key={genre} className={`tw:px-3 tw:py-1 tw:rounded-full tw:border tw:text-xs tw:font-medium ${getTagColor(idx)}`}>
                        {genre}
                      </span>
                    ))}
                  </div>
                </Link>
              )}

              {/* Right Stacked Posts */}
              {recentBlogs.length > 1 && (
                <div className="tw:flex tw:flex-col tw:gap-8">
                  {recentBlogs.slice(1, 3).map((blog) => (
                    <Link href={`/blog/${blog.slug}`} key={blog._id} className="tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:gap-6 tw:group tw:no-underline tw:text-inherit tw:h-full">
                      <div className="tw:w-full tw:aspect-[4/3] sm:tw:aspect-auto tw:h-full tw:relative tw:overflow-hidden tw:rounded-sm">
                        {blog.heroImg ? (
                          <Image src={blog.heroImg} alt={blog.title} fill className="tw:object-cover group-hover:tw:scale-105 tw:transition-transform tw:duration-500" />
                        ) : (
                          <div className="tw:w-full tw:h-full tw:bg-[#d3d4d6]"></div>
                        )}
                      </div>
                      <div className="tw:flex tw:flex-col tw:justify-center">
                        <div className="tw:text-[#964A26] tw:font-semibold tw:text-sm tw:mb-2">
                          {blog.authorName} • {formatDate(blog.createdAt)}
                        </div>
                        <h3 className="alga-font tw:text-xl tw:text-[#2D2D2D] tw:mb-2">{blog.title}</h3>
                        <p className="tw:text-[#6d6d6d] tw:text-sm tw:mb-4 tw:line-clamp-2">
                          {blog.subtitle || blog.shortBio}
                        </p>
                        <div className="tw:flex tw:flex-wrap tw:gap-2 tw:mt-auto">
                          {blog.genres?.map((genre, idx) => (
                            <span key={genre} className={`tw:px-3 tw:py-1 tw:rounded-full tw:border tw:text-xs tw:font-medium ${getTagColor(idx)}`}>
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* All Blog Posts Section */}
        {allBlogs.length > 0 && (
          <section className="tw:mb-20">
            <h2 className="alga-font tw:text-2xl tw:md:text-3xl tw:text-[#2D2D2D] tw:mb-8">All blog posts</h2>
            
            <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-x-8 tw:gap-y-12">
              {allBlogs.map((blog) => (
                <Link href={`/blog/${blog.slug}`} key={blog._id} className="tw:group tw:flex tw:flex-col tw:no-underline tw:text-inherit">
                  <div className="tw:w-full tw:aspect-[3/2] tw:relative tw:mb-6 tw:overflow-hidden tw:rounded-sm">
                    {blog.heroImg ? (
                      <Image src={blog.heroImg} alt={blog.title} fill className="tw:object-cover group-hover:tw:scale-105 tw:transition-transform tw:duration-500" />
                    ) : (
                      <div className="tw:w-full tw:h-full tw:bg-[#d3d4d6]"></div>
                    )}
                  </div>
                  <div className="tw:text-[#964A26] tw:font-semibold tw:text-sm tw:mb-3">
                    {blog.authorName} • {formatDate(blog.createdAt)}
                  </div>
                  <div className="tw:flex tw:justify-between tw:items-start tw:mb-3">
                    <h3 className="alga-font tw:text-xl tw:text-[#2D2D2D] tw:pr-4">{blog.title}</h3>
                    <ArrowUpRight />
                  </div>
                  <p className="tw:text-[#6d6d6d] tw:text-sm tw:mb-5 tw:line-clamp-2">
                    {blog.subtitle || blog.shortBio}
                  </p>
                  <div className="tw:flex tw:flex-wrap tw:gap-2 tw:mt-auto">
                    {blog.genres?.map((genre, idx) => (
                      <span key={genre} className={`tw:px-3 tw:py-1 tw:rounded-full tw:border tw:text-xs tw:font-medium ${getTagColor(idx)}`}>
                        {genre}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Component (Static for now, but layout ready) */}
            {allBlogs.length > 6 && (
              <div className="tw:mt-16 tw:pt-8 tw:border-t tw:border-gray-300 tw:flex tw:justify-between tw:items-center tw:text-sm tw:text-gray-600 tw:font-medium">
                <button className="hover:tw:text-gray-900 tw:flex tw:items-center tw:gap-2">
                  <span>&larr;</span> Previous
                </button>
                <div className="tw:hidden md:tw:flex tw:gap-2 tw:items-center">
                  <button className="tw:w-8 tw:h-8 tw:flex tw:items-center tw:justify-center tw:rounded-md tw:bg-[#964A26] tw:text-white">1</button>
                  <button className="tw:w-8 tw:h-8 tw:flex tw:items-center tw:justify-center tw:rounded-md hover:tw:bg-gray-200">2</button>
                  <button className="tw:w-8 tw:h-8 tw:flex tw:items-center tw:justify-center tw:rounded-md hover:tw:bg-gray-200">3</button>
                  <span className="tw:px-1">...</span>
                  <button className="tw:w-8 tw:h-8 tw:flex tw:items-center tw:justify-center tw:rounded-md hover:tw:bg-gray-200">8</button>
                  <button className="tw:w-8 tw:h-8 tw:flex tw:items-center tw:justify-center tw:rounded-md hover:tw:bg-gray-200">9</button>
                  <button className="tw:w-8 tw:h-8 tw:flex tw:items-center tw:justify-center tw:rounded-md hover:tw:bg-gray-200">10</button>
                </div>
                <button className="hover:tw:text-gray-900 tw:flex tw:items-center tw:gap-2">
                  Next <span>&rarr;</span>
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}
