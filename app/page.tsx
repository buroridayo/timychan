import First from "@/component/First";
import { home4 } from "@/utils/Photo";
import Image from "next/image";
import Link from "next/link";
import CirculartTimer from "@/component/CirculartTimer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col overflow-hidden">
      <div className="m-5 text-white text-2xl flex justify-between items-center shrink-0">
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
      {/* local strage */}
      <div className="flex-1 flex items-start justify-center shrink-0">
        <CirculartTimer />
      </div>

      <div className="shrink-0">
        <First />
      </div>
    </main>
  );
}
