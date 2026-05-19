import Image from "next/image";
import { notFound } from "next/navigation";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default async function BlogDetailsPage({ params }) {
  await dbConnect();
  
  // In Next.js 15+, params is a Promise and must be awaited
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const blog = await Blog.findOne({ slug: slug, isActive: true });

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="tw:bg-[#F2EDE4] tw:min-h-screen tw:py-16">
      <div className="container tw:max-w-6xl tw:mx-auto tw:px-4 tw:md:px-10 tw:lg:px-16">
        {/* Top Header Section */}
        <div className="tw:text-center tw:max-w-3xl tw:mx-auto tw:mb-10">
          <h1 className="alga-font tw:text-4xl tw:md:text-5xl tw:mb-4 tw:text-[#2D2D2D]">
            {blog.title}
          </h1>
          {blog.subtitle && (
            <p className="tw:text-[#6d6d6d] tw:text-sm tw:md:text-base">
              {blog.subtitle}
            </p>
          )}
        </div>

        {/* Hero Image */}
        {blog.heroImg ? (
          <div className="tw:w-full tw:rounded-sm tw:mb-16 tw:overflow-hidden tw:flex tw:justify-center tw:bg-[#EBE5DA]">
            <img src={blog.heroImg} alt={blog.title} className="tw:max-w-full tw:h-auto tw:max-h-[600px] tw:object-contain" />
          </div>
        ) : (
          <div className="tw:w-full tw:h-[300px] tw:md:h-[500px] tw:bg-[#d3d4d6] tw:rounded-sm tw:mb-16"></div>
        )}

        {/* Content Section */}
        <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-[250px_1fr] tw:gap-12">
          {/* Left Sidebar */}
          <div className="tw:flex tw:flex-col tw:gap-8">
            {/* Posted By */}
            <div>
              <div className="tw:text-[#964A26] tw:font-semibold tw:text-sm tw:mb-3">Posted by</div>
              <div className="tw:flex tw:items-center tw:gap-3">
                {blog.authorAvatar ? (
                  <div className="tw:w-10 tw:h-10 tw:rounded-full tw:relative tw:overflow-hidden">
                    <Image src={blog.authorAvatar} alt={blog.authorName} fill className="tw:object-cover" />
                  </div>
                ) : (
                  <div className="tw:w-10 tw:h-10 tw:rounded-full tw:bg-[#d3d4d6]"></div>
                )}
                <div className="tw:text-sm tw:font-medium">{blog.authorName}</div>
              </div>
            </div>

            {/* Genre */}
            {blog.genres && blog.genres.length > 0 && (
              <div>
                <div className="tw:text-black tw:font-semibold tw:text-sm tw:mb-3">Genre</div>
                <div className="tw:flex tw:flex-wrap tw:gap-2">
                  {blog.genres.map((genre, index) => {
                    // Assign colors dynamically or stick to a pattern
                    const isEven = index % 2 === 0;
                    return (
                      <span
                        key={index}
                        className={`tw:px-4 tw:py-1 tw:rounded-full tw:border tw:text-xs ${
                          isEven
                            ? "tw:border-green-300 tw:bg-green-50 tw:text-green-500"
                            : "tw:border-pink-300 tw:bg-pink-50 tw:text-pink-500"
                        }`}
                      >
                        {genre}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Short Bio */}
            {blog.shortBio && (
              <div>
                <div className="tw:text-black tw:font-semibold tw:text-sm tw:mb-2">Short bio</div>
                <p className="tw:text-[#6d6d6d] tw:text-xs tw:leading-relaxed">
                  {blog.shortBio}
                </p>
              </div>
            )}

            {/* Rate */}
            {blog.rating > 0 && (
              <div>
                <div className="tw:text-black tw:font-semibold tw:text-sm tw:mb-2">Rate</div>
                <div className="tw:bg-green-600 tw:text-white tw:text-xs tw:font-bold tw:px-2 tw:py-1 tw:rounded tw:w-max">
                  {blog.rating}
                </div>
              </div>
            )}
          </div>

          {/* Right Main Content */}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }}>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
