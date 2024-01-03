"use client";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState<Boolean>(false);
  const [timeline, setTimeline] = useState<any>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            setLoaderFinished(true);
          }, 1.2);
        },
      });

      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>{loaderFinished ? <Hero /> : <Loader timeline={timeline} />}</main>
  );
}
