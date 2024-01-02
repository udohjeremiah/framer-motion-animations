"use client";

import clsx from "clsx";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function RadialGradientCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className={clsx(
        "group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl",
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className={clsx(
          "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300",
          "group-hover:opacity-100",
        )}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <h3 className={clsx("font-semibold leading-7 text-sky-500")}>Tag</h3>
        <div className={clsx("mt-2 flex items-center")}>
          <span
            className={clsx("text-5xl font-bold tracking-tight text-white")}
          >
            Title
          </span>
        </div>
        <p className={clsx("mt-6 text-base leading-7 text-gray-300")}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          reiciendis vero velit consequatur sunt. Quisquam sed molestiae nihil
          minus, ad eveniet exercitationem nisi dignissimos nesciunt, quibusdam
          ut aut velit vitae.
        </p>
      </div>
    </div>
  );
}
