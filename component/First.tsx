"use client";

import { home1, home2, home3 } from "@/utils/Photo";
import Image from "next/image";
import Link from "next/link";

const First = () => {
  return (
    <nav className="bg-gray-200 rounded-full p-5 flex justify-around items-center">
      <Link href="/">
        <button className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-fuchsia-900">
          <Image src={home1} alt="home" width={54} height={54} />
        </button>
      </Link>
      <Link href="/add">
        <button className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-fuchsia-900">
          <Image src={home2} alt="add" width={54} height={54} />
        </button>
      </Link>
      <Link href="/stats">
        <button className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-fuchsia-900">
          <Image src={home3} alt="stats" width={54} height={54} />
        </button>
      </Link>
    </nav>
  );
};

export default First;
