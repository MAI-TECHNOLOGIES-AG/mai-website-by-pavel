"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const handleScroll = () => {
      // Move image at 40% of scroll speed for a subtle parallax depth
      const offset = window.scrollY * 0.4;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Oversized container so the translated image never reveals a gap
    <div
      ref={imgRef}
      className="absolute inset-0 will-change-transform"
      style={{ top: "-20%", bottom: "-20%", left: 0, right: 0 }}
    >
      <Image
        src="/hero-banner.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />
    </div>
  );
}
