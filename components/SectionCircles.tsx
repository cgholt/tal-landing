import ScrollCircles from "components/ScrollCircles";

// Pinned to the viewport so it stays put and tracks whole-page scroll
// progress. Nested inside a section, between that section's own background
// and its content, so it reliably paints above the background and below
// the text — same local arrangement in every section, each with its own
// fill tinted from that section's background color, and each clipped to its
// own section so the tint changes at the boundary rather than mid-circle.
// Desktop only; mobile uses the compact NavCircles in the nav bar instead.
// Clears the sticky header so the upper circle starts flush with the top of
// the hero rather than drifting down the page on taller screens.
const HEADER_CLEARANCE = 116;

export default function SectionCircles({ tint }: { tint: string }) {
  return (
    <ScrollCircles
      minSize={160}
      maxSize={520}
      sizeVw={0.4}
      fixed
      tint={tint}
      topClearance={HEADER_CLEARANCE}
    />
  );
}
