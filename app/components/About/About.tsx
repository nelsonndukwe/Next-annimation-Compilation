import React from "react";
import styles from "./About.module.scss";
import gsap from "gsap";

const About = () => {


const context = gsap.context(() => {
    const tl = gsap.timeline()

    tl.to('[data-N]', {
        yPercent: -100,
        duration: 5,
        ease: "expo.inOut",
    }).to('[data-E]', {
        yPercent: -100,
        duration: 3.2,
        ease: "power2.inOut",
    }, "<").to('[data-L]', {
        yPercent: -100,
        duration: 3.8,
        ease: "expo.inOut",
    }, "<").to('[data-S]', {
        yPercent: -100,
        duration: 4.8,
        ease: "power2.inOut",
    }, "<").to('[data-O]', {
        yPercent: -100,
        duration: 2.9,
        ease: "expo.inOut",
    }, "<").to('[data-NN]', {
        yPercent: -100,
        duration: 5,
        ease: "power2.inOut",
    }, "<")
})

  return (
    <div className={styles.main__div}>
      <div className={styles.main}>
        <div className={styles.letter__N}>
          <p className="letter__N" data-N>N</p>
          <p className="letter__N" data-N>N</p>
          <p className="letter__N" data-N>N</p>

        </div>
        <div className={styles.letter__E}>
          <p className="letter__E" data-E>E</p>
          <p className="letter__E" data-E>E</p>
          <p className="letter__E" data-E>E</p>
        </div>

        <div className={styles.letter__L}>
          <p className="letter__l" data-L>L</p>
          <p className="letter__l" data-L>L</p>
          <p className="letter__l" data-L>L</p>
        </div>
        <div className={styles.letter__S}>
          <p className="letter__S"  data-S>S</p>
          <p className="letter__S" data-S>S</p>
          <p className="letter__S" data-S>S</p>
        </div>
        <div className={styles.letter__O}>
          <p className="letter__o" data-O>O</p>
          <p className="letter__o" data-O>O</p>
          <p className="letter__o" data-O>O</p>
        </div>

        <div className={styles.letter__NN}>
          <p className="letter__o" data-NN>N</p>
          <p className="letter__o" data-NN>N</p>
          <p className="letter__o" data-NN>N</p>
        </div>
      </div>
    </div>
  );
};

export default About;
