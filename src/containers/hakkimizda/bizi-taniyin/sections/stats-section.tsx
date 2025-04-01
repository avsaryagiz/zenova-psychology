"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Stats data
  const stats = [
    { value: 13, label: "Yıllık Deneyim", suffix: "+" },
    { value: 12, label: "Uzman Psikolog", suffix: "" },
    { value: 5000, label: "Mutlu Danışan", suffix: "+" },
    { value: 8, label: "Terapi Alanı", suffix: "" },
  ];

  return (
    <section
      id="istatistiklerimiz"
      className="bg-accent py-16 shadow-inner md:py-24"
    >
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary text-primary-foreground grid gap-8 rounded-lg p-8 sm:grid-cols-2 md:p-12 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <CountUp
                targetValue={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
                className="text-4xl font-bold md:text-5xl"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-primary-foreground/80 mt-2"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CountUp component for animating numbers
function CountUp({
  targetValue,
  suffix = "",
  isInView,
  className,
}: {
  targetValue: number;
  suffix?: string;
  isInView: boolean;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = targetValue / (duration / 16); // 60fps

    // For smaller numbers, use a slower increment
    const adjustedIncrement = targetValue <= 20 ? 0.1 : increment;

    const timer = setInterval(() => {
      start += adjustedIncrement;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue, isInView]);

  return (
    <p className={className}>
      {count}
      {suffix}
    </p>
  );
}
