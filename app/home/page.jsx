"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useEffect, useRef } from "react";
import {
  Heart,
  Brain,
  Energy,
  Skin,
  Instagram,
  Facebook,
  Whatsapp,
  Mail,
} from "../component/icons";
import Slider from "../component/slider";
import ContactForm from "../component/contactForm";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Home() {
  const img = useRef(null);
  const titleRef = useRef(null);
  const title2 = useRef(null);
  const paraRef = useRef(null);

  // IMAGE ZOOM-OUT
  useGSAP(() => {
    gsap.fromTo(
      img.current,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 2,
        ease: "power2.out",
      }
    );
  });

  // TEXT AFTER PAGE TRANSITION
  useEffect(() => {
    gsap.set(titleRef.current, { autoAlpha: 0 });

    const handleStart = () => {
      requestAnimationFrame(() => {
        const split = new SplitText(titleRef.current, {
          type: "words",
        });

        gsap.fromTo(
          split.words,
          { y: 80, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.06,
            duration: 1,
            ease: "power3.out",
            onStart: () => gsap.set(titleRef.current, { autoAlpha: 1 }),
            onComplete: () => split.revert(),
          }
        );
      });
    };

    window.addEventListener("pageTransitionDone", handleStart);
    return () => window.removeEventListener("pageTransitionDone", handleStart);
  }, []);

  // SECOND SECTION ANIMATION
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: img.current,

        start: "bottom 90%",
      },
    });

    // Heading
    const splitHeading = new SplitText(title2.current, { type: "words" });

    tl.fromTo(
      splitHeading.words,
      { y: 80, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.06,
        duration: 0.8,
        ease: "power3.out",
      }
    )

      // Paragraph
      .fromTo(
        paraRef.current,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "+=0.2"
      )

      // Slider cards (ZOOM IN)
      .fromTo(
        ".slide-card",
        {
          scale: 0.85,
          autoAlpha: 0,
        },
        {
          scale: 1,
          autoAlpha: 1,
          stagger: 0.15,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      );

    tl.eventCallback("onComplete", () => splitHeading.revert());
  });

  return (
    <section>
      {/* hero section */}
      <section className="mx-3 w-auto h-screen md:h-11/12 relative flex items-end rounded-3xl overflow-hidden mt-5 xl:container xl:mx-auto ">
        <Image
          src="/jezvok_bg.jpg"
          alt="Quality medicines built on science and trust"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1440px"
          className="object-cover object-center"
          ref={img}
        />
        <img
          src="/jezvok_bg_md.jpg"
          className="w-full h-full object-cover object-center hidden md:block"
          ref={img}
          alt="image"
        />

        <h1
          ref={titleRef}
          className=" font-semibold  mb-18 ms-5 text-white text-[clamp(2rem,5vw,5rem)] absolute md:bottom-32 font-inter"
        >
          Quality medicines built <br className="hidden md:block" /> on science
          and trust.
        </h1>
      </section>

      {/* second part */}

      <section className="my-5 h-lvh flex flex-wrap justify-center items-center xl:container xl:mx-auto ">
        <div className="mx-3">
          <h1
            ref={title2}
            className="text-[clamp(2rem,2vw,5rem)] text-base/tight text-center font-semibold font-inter"
          >
            Our Approach to Better Health
          </h1>
          <p
            className="mt-10 text-center text-gray-500 text-[20px] font-inter"
            ref={paraRef}
          >
            We focus on quality at every step developing medicines that are
            safe, <br className="hidden md:block" /> consistent, and made for
            real health needs.
          </p>
        </div>

        <Slider />
      </section>

      {/* third part */}

      <section className="bg-[#1F3B3F] w-full md:h-screen flex flex-col  items-center ">
        <h1 className="text-[clamp(2rem,4vw,4rem)] text-center mx-3 font-bold text-white mb-10 md:mb-28 mt-10 font-inter">
          Complete Daily <br className="hidden md:block" /> Wellness Formula
        </h1>
        <img src="/med.png" className="w-1/2 aspect-auto md:hidden mb-10" />
        <img
          src="/medical_label.png"
          className="w-9/12 aspect-auto hidden md:block"
        />
      </section>

      <section className="mt-10 mx-3 flex flex-col sm:grid sm:grid-cols-2 gap-5 md:hidden">
        <div className="bg-[#2E2E2E] p-2 rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-white font-semibold font-inter">
              Heart Health
            </h1>
            <div className="rounded-full bg-white p-4">
              <Heart color={"#1F3B3F"} />
            </div>
          </div>
          <p className="text-gray-400 mt-4 font-inter">
            Supports healthy circulation and cholesterol balance.
          </p>
        </div>

        <div className="bg-[#2E2E2E] p-2 rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-white font-semibold font-inter">
              Brain & Focus
            </h1>
            <div className="rounded-full bg-white p-4">
              <Brain color={"#1F3B3F"} />
            </div>
          </div>
          <p className="text-gray-400 mt-4 font-inter">
            Helps improve memory, focus, and mental clarity.
          </p>
        </div>

        <div className="bg-[#2E2E2E] p-2 rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-white font-semibold font-inter">
              Daily Energy
            </h1>
            <div className="rounded-full bg-white p-4">
              <Energy color={"#1F3B3F"} />
            </div>
          </div>
          <p className="text-gray-400 mt-4 font-inter">
            Boosts stamina, vitality, and immune strength.
          </p>
        </div>

        <div className="bg-[#2E2E2E] p-2 rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-white font-semibold font-inter">
              Skin & Vision Care
            </h1>
            <div className="rounded-full bg-white p-4">
              <Skin color={"#1F3B3F"} />
            </div>
          </div>
          <p className="text-gray-400 mt-4 font-inter">
            Protects skin, eyes, and cells from oxidative stress.
          </p>
        </div>
      </section>

      {/* about */}

      <section className="h-screen items-center flex flex-wrap relative md:grid md:grid-cols-2 xl:container xl:mx-auto ">
        <img src="/medical_pill.png" className=" absolute md:static" />

        <div className="mx-3 absolute md:static z-10">
          <h1 className="text-4xl font-inter">About Us</h1>

          <p className="mt-8 text-gray-500 font-inter">
            Jezvok Pharma is a trusted pharmaceutical company dedicated to
            delivering safe, effective, and high-quality medicines that support
            better patient outcomes.
            <br /> <br />
            Our vision is to be a globally trusted pharmaceutical company by
            delivering innovative, safe, and high-quality healthcare solutions
            that enhance lives and create a healthier world.
            <br /> <br />
            Our mission is to improve patient well-being by developing reliable
            pharmaceutical products while maintaining the highest standards of
            quality, ethics, and scientific excellence.
          </p>
        </div>
      </section>

      {/* contact */}
      <section className="md:grid md:grid-cols-2 xl:container xl:mx-auto ">
        <div>
          <h1 className="text-4xl mx-3 font-inter">Contact</h1>

          <ContactForm />
        </div>

        <div className="hidden md:flex items-center flex-col gap-5">
          <span>
            <div className="flex gap-5 mb-10 ">
              {" "}
              <Instagram color={"#1F3336"} />
              <Facebook color={"#1F3336"} />
              <Whatsapp color={"#1F3336"} />
              <a href="mailto:jezvokpharma@gmail.com">
                <Mail color={"#1F3336"} />
              </a>
            </div>
            <p className="font-inter text-2xl">
              Jezvok pharma Gurudeva building 388/D, <br /> Vadakkumpuram p o
              <br /> N paravur, Ernakulam , 683521
            </p>
          </span>
        </div>
      </section>

      {/* footer */}

      <footer className="mt-5">
        <div className="bg-[#2E2E2E]  py-5 md:hidden">
          <div className="mx-3 my-5 flex gap-5 w-full items-center justify-center">
            <Instagram color={"white"} />

            <Facebook color={"white"} />
            <Whatsapp color={"white"} />
            <a href="mailto:jezvokpharma@gmail.com">
              <Mail color={"white"} />
            </a>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-b rounded-none  border-gray-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-2xl font-semibold text-white font-inter">
              CONTACT
            </div>
            <div className="collapse-content text-md text-white font-inter">
              Jezvok pharma Gurudeva building 388/D, Vadakkumpuram p o
              <br /> N paravur Ernakulam , 683521
            </div>
          </div>
        </div>

        <div className="bg-[#1F3B3F] p-2 flex justify-center text-white">
          <p className="text-[clamp(0.8rem,2vw,1rem)] font-inter">
            2025 All copyright reserved. Powered by{" "}
            <a href="https://foxvista.in/"> foxVista</a>
          </p>
        </div>
      </footer>
    </section>
  );
}
