"use client";

import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1542065435-d6bc2eac3377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyc3x8fHx8fDE3MDExMzk4Mzg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1686191568216-aea226860b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyLHVzZXJ8fHx8fHwxNzAxMTM5ODI5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1501455798972-e374108fa04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE3MDExMzk3OTU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1431440869543-efaf3388c585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyLG5pZ2h0fHx8fHx8MTcwMTEzOTgxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1551705256-ce283146ef68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTEzOTc3NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1698778873718-014dd4ce22bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTEzOTc1MQ&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1681220033526-f228cc8e499d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE3MDExMzk3ODc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
];

export default function SlideShow() {
  const [slider, setSlider] = useState({ index: 0, direction: null });

  return (
    <div
      className={clsx(
        "relative aspect-[16/9] w-[60vw] overflow-hidden rounded-3xl",
      )}
    >
      <AnimatePresence initial={false} custom={slider.direction}>
        <motion.img
          key={images[slider.index]}
          custom={slider.direction}
          initial={(direction) => ({
            x: direction === "left" ? 200 : -200,
            opacity: 0,
            scale: 0.5,
          })}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { ease: "easeInOut" },
          }}
          exit={(direction) => ({
            x: direction === "left" ? -200 : 200,
            opacity: 0,
            scale: 0.5,
            transition: { ease: "easeInOut" },
          })}
          src={images[slider.index]}
          alt=""
          className={clsx(
            "absolute h-full w-full rounded-3xl object-cover object-center",
          )}
        />
      </AnimatePresence>
      <button
        onClick={() =>
          setSlider({
            index: slider.index > 0 ? slider.index - 1 : images.length - 1,
            direction: "left",
          })
        }
        className={clsx(
          "absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-slate-800 p-2 text-lg text-white",
          "hover:bg-slate-900",
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={() =>
          setSlider({
            index: slider.index < images.length - 1 ? slider.index + 1 : 0,
            direction: "right",
          })
        }
        className={clsx(
          "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800 p-2 text-lg text-white",
          "hover:bg-slate-900",
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
