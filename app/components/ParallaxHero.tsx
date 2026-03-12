"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ParallaxHero() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    const handleScroll = () => {
      const offset = window.scrollY * 0.2;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div
        ref={logoRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[100%] opacity-12 pointer-events-none select-none"
      >
        <Image
          src="/logo-white.svg"
          alt=""
          fill
          className="object-contain object-right"
          priority
        />
      </div>
    </div>
  );
}
