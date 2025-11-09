import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type TimerSelectProps = {
  label: string;
  value: number;
  onchange: (val: number) => void;
  range: number;
};

gsap.registerPlugin(ScrollTrigger);

const TimerSelect = ({ label, value, onchange, range }: TimerSelectProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <div className="flex flex-col items-center" ref={scrollRef}>
      <label className="mb-2 text-sm">
        {value}
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onchange(Number(e.target.value))}
        className="h-20 w-16 text-center bg-black text-white  overflow-y-scroll hidden-scrollbar"
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
