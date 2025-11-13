"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/utils/Draweropen";
import TimeDrawer from "@/utils/Draweropen/TimeDrawer";
import { useState } from "react";
import * as React from "react";

const CirculartTimer = () => {
  //circle aria
  const radius = 200;
  const stroke = 50;
  const normalRadius = radius - stroke / 2;
  const circulaference = normalRadius * 2 * Math.PI;
  const progress = 0.9;

  //button togglemode
  const [isRunning, setIsRunning] = useState(true);
  const [isPause, setIsPause] = useState(false);

  const handleQuitToggle = () => {
    setIsRunning((prev) => !prev);
    setIsPause(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 shrink-0 mt-20 sm:mt-20">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#2e2e2e"
          fill="transparent"
          strokeWidth={stroke}
          r={normalRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circulaference}
          strokeDashoffset={circulaference * (1 - progress)}
          r={normalRadius}
          cx={radius}
          cy={radius}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7f5af0" />
            <stop offset="100%" stopColor="#d8b4fe" />
          </linearGradient>
        </defs>
      </svg>

      {/* button aria */}
      <div className="flex gap-6 mt-3">
        <button className="flex items-center gap-2 px-4 bg-white rounded-2xl active:bg-gray-500 transition">
          <svg width="40" height="40" fill="black">
            <rect x="4" y="10" width="10" height="20" />
            <rect x="24" y="10" width="10" height="20" />
          </svg>
        </button>
        <button
          onClick={handleQuitToggle}
          className="flex items-center gap-2 px-4 bg-white rounded-2xl active:bg-gray-500 transition "
        >
          {isRunning ? (
            <>
              <svg width="40" height="40" fill="black">
                <rect x="8" y="8" width="24" height="24" />
              </svg>
            </>
          ) : (
            <>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="black">
                <polygon points="10,8 10,32 32,20" />
              </svg>
            </>
          )}
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center mb-4">
          <Drawer>
            <DrawerTrigger>
              <button className="text-white text-2xl sm:text-base outline outline-white px-3 py-1 rounded-xl hover:bg-white hover:text-black transition">
                TimeList
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>All Time Records</DrawerTitle>
                <TimeDrawer />
              </DrawerHeader>
              <DrawerFooter>
                <button className=" text-white bg-black text-xl sm:text-base outline outline-white px-3 py-1 rounded-2xl active:bg-white active:text-black transition w-full">
                  Add
                </button>
                <DrawerClose className="w-full">
                  <button className="text-black bg-white text-xl sm:text-base outline outline-black px-3 py-1 rounded-2xl active:bg-white active:text-black transition w-full">
                    Cancel
                  </button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default CirculartTimer;
