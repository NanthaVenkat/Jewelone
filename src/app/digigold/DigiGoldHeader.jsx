import Image from "next/image"
import Link from "next/link"

const DigiGoldHeader = () => {
  return (
    <nav className="bg-[#f2ede4]">
        <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-2">
            <div className="tw:flex tw:gap-4 tw:items-center tw:justify-between">
                <div>
                    <Image src={"/digigold/logo.svg"} className="tw:h-12 tw:md:h-16 tw:w-full" width={'250'} height={62} alt="logo"/>
                </div>
                <div>
                    <Link className="tw:bg-rk-primary tw:block tw:whitespace-nowrap tw:!text-white tw:!no-underline tw:uppercase tw:text-sm tw:px-6 tw:py-2 tw:rounded-full" href={'#signUp'}>Sign Up</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default DigiGoldHeader