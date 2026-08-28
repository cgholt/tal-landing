import ScrollCircles from "components/ScrollCircles";

const MIN_SIZE = 40;
const MAX_SIZE = 90;
const SIZE_VW = 0.14;

// Same clamp() the circles size themselves with, so the nav row can be
// told to stay at least this tall and never clip their top/bottom edges.
export const NAV_CIRCLES_SIZE_CSS = `clamp(${MIN_SIZE}px, ${SIZE_VW * 100}vw, ${MAX_SIZE}px)`;

// Sized and clipped to fit inside the nav bar row. Mobile only —
// desktop uses the per-section SectionCircles instead.
export default function NavCircles() {
  return <ScrollCircles minSize={MIN_SIZE} maxSize={MAX_SIZE} sizeVw={SIZE_VW} />;
}
