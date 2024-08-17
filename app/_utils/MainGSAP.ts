import gsap from "gsap";
import { ContextSafeFunc } from "@gsap/react";
import { RefObject } from "react";

const contextSafeError = () => {
  console.error("unable to acquire GSAP context: contextSafe");
};

export const scrollTo = ({
  target,
  offset,
  contextSafe,
  fn,
}: {
  target: RefObject<HTMLElement>;
  offset: number;
  contextSafe: ContextSafeFunc;
  fn?: Function;
}) => {
  return contextSafe
    ? contextSafe(() => {
      const mm = gsap.matchMedia();

      mm.add("(hover: none)", () => {
        gsap.to(window, {
          scrollTo: {
            y: target.current ? target.current : "",
            offsetY: offset,
            autoKill: false,
          },
          duration: 1,
          ease: "power3",
        });
      });

      mm.add("(hover: hover)", () => {
        gsap.to(window, {
          scrollTo: {
            y: target.current ? target.current : "",
            offsetY: offset,
            autoKill: true,
          },
          duration: 1,
          ease: "power3",
        });
      })

      if(fn) fn();
    })
    : contextSafeError;
};
