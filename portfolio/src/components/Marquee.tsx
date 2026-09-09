import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

interface MarqueeProps {
  speed?: number; // Percentage per second for precise, buttery-slow motion
  className?: string;
}

export default function Marquee({
  speed = 2.2, // Balanced, smooth, and visible pace
  className = "",
}: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const directionFactor = useRef<number>(-1);

  useAnimationFrame((_, delta) => {
    // moveBy is percentage based: (delta / 1000) * speed
    let moveBy = directionFactor.current * speed * (delta / 1000);

    const v = velocityFactor.get();
    if (v < 0) {
      directionFactor.current = 1;
    } else if (v > 0) {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * Math.abs(v) * moveBy * 0.5;

    baseX.set(baseX.get() + moveBy);
  });

  // Wrap smoothly between -50% and 0% for an infinite seamless loop
  const x = useTransform(baseX, (v) => `${(v % 50) - 50}%`);

  const name = "Mohd Abdul Ikram — ";

  return (
    <div className={`overflow-hidden whitespace-nowrap flex select-none pointer-events-none w-full ${className}`}>
      <motion.div
        className="flex whitespace-nowrap font-bold tracking-tighter text-white"
        style={{ x }}
      >
        <span className="block pr-6 sm:pr-8">{name}</span>
        <span className="block pr-6 sm:pr-8">{name}</span>
        <span className="block pr-6 sm:pr-8">{name}</span>
        <span className="block pr-6 sm:pr-8">{name}</span>
      </motion.div>
    </div>
  );
}
