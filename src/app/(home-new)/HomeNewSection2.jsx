import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeNewSection2 = () => {
  return (
    <section className="tw:max-lg:bg-[#E0DACF] tw:lg:bg-[#F2EDE4]">
      <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-10 tw:md:py-16">
        <div className="tw:flex tw:flex-col tw:justify-center tw:items-center tw:max-lg:text-center tw:gap-4 tw:lg:flex-row tw:lg:justify-between tw:lg:text-start tw:lg:px-8">
          <div className="tw:text-3xl tw:lg:text-5xl tw:font-medium tw:text-black tw:max-w-md alga-font">
            <div>Collections made </div>
            <div className="tw:italic">Just for Her..</div>
          </div>

          <div className="tw:max-w-md tw:text-md tw:lg:text-lg tw:text-[#3B4443]">
            Giving graciously is what we do best. Few feelings are more
            rewarding than seeing someone smile as they unwrap a present you’ve
            thoughtfully chosen because it’s simply them.
          </div>
        </div>

        <div className="tw:scrollbar-hide tw:overflow-auto">
          <div className="tw:grid tw:grid-cols-4 tw:gap-3 tw:mt-10 tw:min-w-[1200px]">
            <div>
              <Link href="#">
                <Image
                  height={613}
                  width={415}
                  src="/home-new/section2/image1.webp"
                  alt="collection 1"
                />
              </Link>
            </div>

            <div>
              <Link href="#">
                <Image
                  height={613}
                  width={415}
                  src="/home-new/section2/image2.webp"
                  alt="collection 2"
                />
              </Link>
            </div>

            <div>
              <Link href="#">
                <Image
                  height={613}
                  width={415}
                  src="/home-new/section2/image3.webp"
                  alt="collection 3"
                />
              </Link>
            </div>

            <div>
              <Link href="#">
                <Image
                  height={613}
                  width={415}
                  src="/home-new/section2/image4.webp"
                  alt="collection 4"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="tw:mt-12 tw:flex tw:justify-center">
          <Link href="#" className="button-dark">
            Explore collections
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default HomeNewSection2;
