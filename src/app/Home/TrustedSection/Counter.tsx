"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  format?: (value: number) => string; // optional formatting
}

export function Counter({ from = 0, to, duration = 2, format }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(from);
  const motionValue = useMotionValue(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration,
        onUpdate: (latest) => setDisplay(latest),
      });
      return controls.stop;
    }
  }, [isInView, to, duration, motionValue]);

  return (
    <motion.span ref={ref}>
      {format ? format(Math.floor(display)) : Math.floor(display)}
    </motion.span>
  );
}
