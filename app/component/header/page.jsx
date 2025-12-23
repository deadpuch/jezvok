"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const dropDown = useRef();
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.fromTo(
      dropDown.current,
      { height: 0 },
      { height: "50vh", duration: 1, ease: "power2.out", display: "block" }
    );
  });

  const handleOpen = () => {
    tl.current.play();
  };

  const handleClose = () => {
    tl.current.reverse();
  };

  return (
    <header className="z-20 absolute w-full px-5 ">
      <nav className="flex px-5 justify-between mt-5 relative xl:container xl:mx-auto ">
        <div>
          <img src="/logo.svg" />
        </div>

        <ul>
          <li onClick={handleOpen} className="text-white font-inter">
            <a href="#">All medicine</a>
          </li>
        </ul>

        <section
          ref={dropDown}
          className="overflow-hidden w-full md:w-2/4 rounded-3xl bg-white absolute top-8 right-0 md:right-3 px-5 hidden"
        >
          <button
            className="text-black w-full flex justify-end cursor-pointer font-inter"
            onClick={handleClose}
          >
            close
          </button>

          <div className="bg-[#E0EAEB] w-full md:max-w-2/3  h-auto p-2 rounded-2xl mt-10">
            <h1 className="font-semibold font-inter">Daily Wellness</h1>

            <div className="flex justify-between gap-5 p-2">
              <div className="w-52 p-2 bg-white rounded-[10px]">
                <img
                  src="/med.png"
                  className="w-full h-full object-contain"
                  alt="medicine"
                />
              </div>

              <span>
                <h1 className="font-semibold font-inter">MAGAJEZ</h1>
                <p className="text-gray-500 mt-2 font-inter">
                  Supports heart, brain, energy, and skin health.
                </p>
              </span>
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
}
