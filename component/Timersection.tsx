"use client";
import TimerSelect from "@/utils/TimerSelect";
import { useState } from "react";

const Timersection = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  return (
    <div className="flex justify-center gap-10 bg-black p-20 rounded-3xl text-white">
      <TimerSelect label="hours" value={hours} onchange={setHours} range={24} />
      <TimerSelect
        label="minutes"
        value={minutes}
        onchange={setMinutes}
        range={60}
      />
      <TimerSelect
        label="seconds"
        value={seconds}
        onchange={setSeconds}
        range={60}
      />
    </div>
  );
};

export default Timersection;
