import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          MASSIMO
        </Link>
        <p className="uppercase">© all right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
