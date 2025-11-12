"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center space-x-2">
      <Image
        src="/images/US_logo_website.png"
        alt="Unify Healthcare"
        width={300}
        height={66}
        priority
        
      />
    </Link>
  );
}
