import ScrollCircles from "components/ScrollCircles";

// Sized and clipped to fit inside the nav bar row. Mobile only —
// desktop uses the per-section SectionCircles instead.
export default function NavCircles() {
  return <ScrollCircles minSize={40} maxSize={90} sizeVw={0.14} />;
}
