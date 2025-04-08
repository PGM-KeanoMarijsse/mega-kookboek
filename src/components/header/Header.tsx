import React from "react";
import banner from "../../assets/images/banner.jpg";
import logo from "../../assets/images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full bg-[#1a1a1a] text-white">
      <div className="relative w-full h-[50vh]">
        <img
          src={banner.src}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <Link
          href="/"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <img src={logo.src} alt="Logo" className="w-32 h-32" />
        </Link>
      </div>
      <div className="text-center p-4">
        <h1 className="text-3xl font-bold">Mega kookboekje</h1>
        <p className="text-lg">Online editie!</p>
      </div>
    </header>
  );
}
