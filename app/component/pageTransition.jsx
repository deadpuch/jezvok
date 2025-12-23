"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PageTransition({ children }) {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { height: 0 },
      {
        height: "auto",
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          window.dispatchEvent(new Event("pageTransitionDone"));
        },
      }
    );
  });

  return (
    <div ref={container} className="overflow-hidden">
      {children}
    </div>
  );
}
