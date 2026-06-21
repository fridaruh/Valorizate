"use client";

import { useState } from "react";

export default function EventCard({
  title,
  desc,
  icon,
  color,
  delay,
}: {
  title: string;
  desc: string;
  icon: string;
  color: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="animate-on-scroll border rounded-2xl p-8 transition-all duration-300 cursor-default"
      style={{
        transitionDelay: `${delay}ms`,
        backgroundColor: hovered ? color : "white",
        borderColor: hovered ? color : "#E0E0E0",
        boxShadow: hovered ? "0 10px 25px -5px rgba(0,0,0,0.15)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        className="w-8 h-8 mb-4 transition-colors duration-300"
        style={{ color: hovered ? "white" : "#0052E0" }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
      <h3
        className="font-[family-name:var(--font-display)] font-bold text-xl uppercase mb-2 transition-colors duration-300"
        style={{ color: hovered ? "white" : "#0A0A0A" }}
      >
        {title}
      </h3>
      <p
        className="font-[family-name:var(--font-body)] leading-relaxed transition-colors duration-300"
        style={{ color: hovered ? "rgba(255,255,255,0.9)" : "#555555" }}
      >
        {desc}
      </p>
    </div>
  );
}
