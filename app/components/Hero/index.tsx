"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { animateTitle, animateImage, animateNav } from "./annimations";
import styles from "./Hero.module.scss";

import Logo from "../Logo/index";
import Menu from "./Menu";

const Hero = forwardRef(function Hero(props, ref: any) {
  console.log(`ref`, ref.current);
  const [toogle, setToggle] = useState(true);
  const heroRef = useRef(null);
  const timeline = useRef(gsap.timeline());
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(animateImage(), 0).add(animateNav(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  const handleMenuOpen = () => {
    const tl = timeline.current;
    const context = gsap.context(() => {
      tl.to("[data-menu-overlay-first]", {
        duration: 0.5,
        transformOrigin: "top left",
        scaleY: 1,
        ease: "Power1.easeOut"
      })
        .to(
          "[data-menu-overlay-second]",
          {
            duration: 0.5,
            transformOrigin: "top left",
            scaleY: 1,
            ease: "Power1.easeOut"

          },
          "<15%"
        )
        .to(
          "[data-menu-overlay-third]",
          {
            duration: 0.5,
            transformOrigin: "top left",
            scaleY: 1,
            ease: "Power1.easeOut"

          },
          "<15%"
        )
        .to(
          "[data-menu-overlay-fourth]",
          {
            duration: 0.5,
            transformOrigin: "top left",
            scaleY: 1,
          },
          "<15%"
        )
        .to(
          "[data-menu-overlay-fifth]",
          {
            duration: 0.5,
            transformOrigin: "top left",
            scaleY: 1,
          },
          "<15%"
        );
    });
    return () => context.revert();
  };

  const handleMenuClose = () => {
    const tl = timeline.current;
    const context = gsap.context(() => {
      tl.to("[data-menu-overlay-first]", {
        duration: 0.5,
        transformOrigin: "top left",
        scaleY: 0,
      })
        .to(
          "[data-menu-overlay-second]",
          {
            duration: 0.5,
            transformOrigin: "top left",
            scaleY: 0,
          },
          "<15%"
        )
        .to(
          "[data-menu-overlay-third]",
          {
            duration: 0.5,
            transformOrigin: "top left",
            scaleY: 0,
          },
          "<15%"
        )
        .to(
          "[data-menu-overlay-fourth]",
          {
            duration: 0.5,
            transformOrigin: "top left",
            scaleY: 0,
          },
          "<15%"
        )
        .to(
          "[data-menu-overlay-fifth]",
          {
            duration: 0.5,
            transformOrigin: "top left",
            scaleY: 0,
          },
          "<15%"
        );
    });
    return () => context.revert();
  };

  const handleMenu = () => {
    if (toogle) {
      setToggle(false);
    } else {
      setToggle(true);
    }

    if (toogle) {
      handleMenuOpen();
    } else {
      handleMenuClose();
    }
    console.log(`clicked`);
  };

  return (
    <section className={styles.hero} ref={heroRef}>
      <ul className={styles.transistion}>
        <li data-menu-overlay-first></li>
        <li data-menu-overlay-second></li>
        <li data-menu-overlay-third></li>
        <li data-menu-overlay-fourth></li>
        <li data-menu-overlay-fifth></li>
      </ul>

      <div className={styles.hero__top}>
        <div data-menu-item data-hidden>
          <Logo />
        </div>
        <span data-menu-item data-hidden>
          about
        </span>
        <Menu onClick={handleMenu} />
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

export default Hero;
