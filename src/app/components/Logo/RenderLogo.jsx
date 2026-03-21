"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RenderLogo = ({logo}) => {
    // const currentRoute = usePathname();
// console.log(logo);
    switch (logo) {
      case "florencia":
        return (
          <span>

            <Image
              width={200}
              height={42}
              src="/florencia/logo.svg"
              alt="logo"
              priority
            />
         </span>
        );
      case "zilara":
        return (
          <span>
            <Image
              width={222}
              height={56}
              src="/zillara.svg"
              alt="logo"
              priority
            />
         </span>
        );
        case "jewelone-white":
          return (
            <span>
              <Image
                width={222}
                height={56}
                src="/footer-logo.svg"
                alt="logo"
                priority
              />
           </span>
          );
          case "jewelone-black":
            return (
              <span>
                <Image
                  width={222}
                  height={56}
                  src="/JO_Logo.svg"
                  alt="logo"
                  priority
                />
             </span>
            );
            case "digigold":
            return (
              <span>
                <Image
                  width={250}
                  height={56}
                  src="/digigold/logo.svg"
                  alt="logo"
                  priority
                />
             </span>
            );
      default:
        return (
          <Link href="/">
            <Image
              width={222}
              height={56}
              src="/JO_Logo.svg"
              className="tw:h-14 tw:w-full"
              alt="logo"
              priority
            />
          </Link>
        );
    }
  };

export default RenderLogo