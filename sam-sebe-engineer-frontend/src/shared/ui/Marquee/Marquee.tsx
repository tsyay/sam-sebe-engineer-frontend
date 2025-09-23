import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

export const Marquee = ({
  children,
  className = "",
  speed = "normal",
  pauseOnHover = false,
  direction = "left",
}: MarqueeProps) => {
  const speedClasses = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  };

  const directionClass =
    direction === "right" ? "animate-marquee-right" : "animate-marquee";

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div
        className={`inline-flex whitespace-nowrap items-center justify-center ${
          speedClasses[speed]
        } ${directionClass} ${pauseOnHover ? "hover:animation-paused" : ""}`}
      >
        {children}
        {/* Дублируем контент для бесшовной анимации */}
        {children}
      </div>
    </div>
  );
};