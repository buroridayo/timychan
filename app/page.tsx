import First from "@/component/First";
import Second from "@/component/Second";
import { home4 } from "@/utils/Photo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex  flex-col justify-between">
      <div className="m-5 text-black text-2xl flex justify-between items-center">
        <h1>Timychan</h1>
        <Link href="/setting">
          <Image
            src={home4}
            alt="setting"
            width={52}
            height={52}
            className="inline-block"
          />
        </Link>
      </div>
      <Second />

      <First />
    </main>
  );
}
