"use client";

import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { introannimation, progress, collapseWords } from "./annimations";
import styles from "./Loader.module.scss";
import gsap from "gsap";

interface  LoaderProps{
  timeline: any;
}


const Loader = ({timeline}:LoaderProps) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);
  const loaderWrapperRef =  useRef(null)

  useEffect(() => {

    timeline && timeline.add(introannimation(wordGroupsRef)).add(progress(progressRef, progressNumberRef, loaderWrapperRef), 0).add(collapseWords(loaderRef), "-=1")
  }, [timeline]);

  return (
    <div className={styles.container}ref={loaderWrapperRef}>
    <div className={styles.loader__wrapper} >
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0
        </span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Loader;
