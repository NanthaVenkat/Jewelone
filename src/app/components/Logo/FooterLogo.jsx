"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterLogo = () => {
    const currentRoute = usePathname();

    switch (currentRoute) {
      case "/florencia":
        return (
          <Link className="navbar-brand" href="/">
            <Image
              width={265}
              height={46}
              className="img-fluid"
              src="/florencia/logo.svg"
              alt="logo"
              priority
            />
          </Link>
        );
      case "/zilara":
        return (
          <Link className="navbar-brand" href="/">
            <Image
              width={222}
              height={56}
              className="img-fluid"
              src="/zillara.svg"
              alt="logo"
              priority
            />
          </Link>
        );
      default:
        return (
          <Link className="navbar-brand" href="/">
            <Image
              width={222}
              height={56}
              className="img-fluid"
              src="/JO_Logo.svg"
              alt="logo"
              priority
            />
          </Link>
        );
    }
  };

export default FooterLogo