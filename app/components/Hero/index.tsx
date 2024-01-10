"use client";

import { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { animateTitle, animateImage, animateNav } from "./annimations";
import styles from "./Hero.module.scss";

import Logo from "../Logo/index";
import Menu from "./menu";

const Hero = forwardRef(function Hero(props, ref:any) {
  console.log(`ref`, ref.current)

  const heroRef = useRef(null)
  const timeline = useRef(gsap.timeline());
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(animateImage(), 0).add(animateNav(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.hero__top}>
        <div data-menu-item data-hidden>
          <Logo />
        </div>
        <span data-menu-item data-hidden>
          about
        </span>
       <Menu ref={ref}/>
      </div>

      <h1 className={styles.hero__title}>
        <span data-title-first data-hidden>
          Ultra
        </span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-title-last data-hidden>
          agency
        </span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
          data-image
          src="/images/blob.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
});

export default Hero
