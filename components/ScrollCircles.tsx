"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { clipBand } from "lib/clipBand";

// Scroll-linked overlap effect: two circles slide symmetrically toward a fixed
// midpoint as the page scrolls, fully converging at the bottom, with a third
// layer painting their intersection. Shared by NavCircles (compact, in the nav
// bar) and the per-section desktop circles (large, nested in each section so it
// paints above that section's own background and below its content) via size
// props.
//
// TRAVEL_RATIO is the total separation at the top of the page as a fraction of
// the circle's diameter; each circle covers half of it. DIAGONAL_RATIO tilts
// that axis off horizontal — vertical separation as a fraction of the
// horizontal, so the pair meets along a diagonal. 0 gives the flat version.
const TRAVEL_RATIO = 0.9;
const DIAGONAL_RATIO = 0.28;

export default function ScrollCircles({
  minSize,
  maxSize,
  sizeVw,
  fixed = false,
  tint = "var(--primary)",
  topClearance,
}: {
  minSize: number;
  maxSize: number;
  sizeVw: number;
  fixed?: boolean;
  tint?: string;
  /** Where the upper circle's top edge should sit, in px below the viewport
   *  top. Anchoring from the top keeps the motif at the same height on every
   *  screen; centring on 50% instead pushes it further down the taller the
   *  window gets. Omit to centre vertically (NavCircles, in a short nav row). */
  topClearance?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const overlapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const sizeCss = `clamp(${minSize}px, ${sizeVw * 100}vw, ${maxSize}px)`;
  // `top` locates the pair's centre line; each circle is then centred on it via
  // translateY(-50%). To put the upper circle's top edge exactly at
  // topClearance, that line has to clear half a circle plus the upward half of
  // the diagonal split — derived from the travel constants so it can't drift
  // out of sync with them, and so it holds at every clamped circle size.
  const anchorOffset = 0.5 + (TRAVEL_RATIO / 2) * DIAGONAL_RATIO;
  const circleStyle: CSSProperties = {
    top:
      topClearance === undefined
        ? "50%"
        : `calc(${topClearance}px + ${sizeCss} * ${anchorOffset})`,
    height: sizeCss,
    width: sizeCss,
    right: sizeCss,
    transform: "translateY(-50%)",
  };

  useEffect(() => {
    // Every section renders its own instance at the same viewport-pinned spot,
    // each tinted from its own background. Clipping an instance to its
    // section's on-screen band is what keeps them from overlapping: the arc
    // stays continuous across a boundary while the tint changes exactly at it.
    // NavCircles has no section ancestor (it sits in a <header>) and is already
    // clipped by its own overflow-hidden row, so it skips this entirely.
    const section = wrapperRef.current?.closest("section") ?? null;
    const currentSize = () => Math.min(maxSize, Math.max(minSize, window.innerWidth * sizeVw));

    const update = () => {
      const wrapper = wrapperRef.current;
      if (section && wrapper) {
        const rect = section.getBoundingClientRect();
        const band = clipBand(rect.top, rect.bottom, window.innerHeight);
        // Off-screen: hide and skip the transform write below. Only one or two
        // sections are ever on screen, so this caps per-frame work no matter
        // how many sections layout.json enables.
        if (!band) {
          wrapper.style.visibility = "hidden";
          return;
        }
        wrapper.style.visibility = "";
        wrapper.style.clipPath = band;
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 1;
      // Both circles travel the same distance inward, so the pair stays centred
      // on a fixed midpoint instead of one end being anchored. At progress 0
      // they sit a full TRAVEL_RATIO apart; at 1 they meet in the middle. The
      // horizontal centre sits at `half` to keep the composition where it is,
      // while the vertical stays centred on 0 so the tilt reads as a rotation
      // of the axis rather than a downward drift.
      const half = (currentSize() * TRAVEL_RATIO) / 2;
      const gap = 2 * half * (1 - progress);
      const halfGapY = (gap / 2) * DIAGONAL_RATIO;
      const leftX = half - gap / 2;
      const rightX = half + gap / 2;
      // Translations commute, so the -50% centring can stay in front.
      if (leftRef.current) {
        leftRef.current.style.transform = `translateY(-50%) translate(${leftX}px, ${-halfGapY}px)`;
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `translateY(-50%) translate(${rightX}px, ${halfGapY}px)`;
      }
      // The lens is clipped to the left circle, so it rides along with it; its
      // inner layer only needs the gap that remains between the two.
      if (lensRef.current) {
        lensRef.current.style.transform = `translateY(-50%) translate(${leftX}px, ${-halfGapY}px)`;
      }
      if (overlapRef.current) {
        overlapRef.current.style.transform = `translate(${gap}px, ${2 * halfGapY}px)`;
      }
    };

    const onUpdate = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onUpdate, { passive: true });
    window.addEventListener("resize", onUpdate);
    return () => {
      window.removeEventListener("scroll", onUpdate);
      window.removeEventListener("resize", onUpdate);
      cancelAnimationFrame(rafRef.current);
    };
  }, [minSize, maxSize, sizeVw]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={`${fixed ? "fixed" : "absolute"} inset-0 z-0 overflow-hidden pointer-events-none`}
      style={{ "--circle-tint": tint } as CSSProperties}
    >
      <div ref={leftRef} className="absolute rounded-full scroll-circle-fill" style={circleStyle} />
      <div ref={rightRef} className="absolute rounded-full scroll-circle-fill" style={circleStyle} />
      {/* The lens: a right-circle-shaped layer clipped to the left circle, so it
          paints exactly their intersection. Kept as its own element because the
          overlap that falls out of alpha compositing is too faint to read. */}
      <div ref={lensRef} className="absolute rounded-full overflow-hidden" style={circleStyle}>
        <div ref={overlapRef} className="absolute inset-0 rounded-full scroll-circle-lens" />
      </div>
    </div>
  );
}
