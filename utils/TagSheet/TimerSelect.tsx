import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type TimerSelectProps = {
  label: string;
  value: number;
  onchange: (val: number) => void;
  range: number;
  resetTrigger: number;
};

gsap.registerPlugin(ScrollTrigger);

const TimerSelect = ({
  label,
  value,
  onchange,
  range,
  resetTrigger,
}: TimerSelectProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (resetRef.current) {
      resetRef.current.selectedIndex = 0;
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [resetTrigger]);

  useEffect(() => {
    gsap.to(scrollRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      ease: "power1.out",
    });
  }, []);
  return (
    <div
      className="flex flex-col items-center min-w-[100px] shrink-0"
      ref={scrollRef}
    >
      <label className="mb-4 text-xl">
        {value}
        {label}
      </label>
      <select
        ref={resetRef}
        value={value}
        onChange={(e) => onchange(Number(e.target.value))}
        className="h-60 w-24 text-center bg-black text-white overflow-y-scroll hidden-scrollbar outline-none text-2xl"
        size={5}
      >
        {Array.from({ length: range }, (_, i) => (
          <option key={i} value={i} className="text-xl">
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimerSelect;
