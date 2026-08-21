// The circles layer is `position: fixed; inset: 0`, so its border box is exactly
// the viewport and clip insets are already in viewport coordinates. Clipping each
// section's instance to its own on-screen band is what makes the motif recolor at
// the section boundary instead of when the circle's center crosses it.
// Returns null when the section is off-screen, so callers can skip their writes.
export function clipBand(
  rectTop: number,
  rectBottom: number,
  viewportH: number,
): string | null {
  const top = Math.max(0, rectTop);
  const bottom = Math.min(viewportH, rectBottom);
  if (bottom <= top) return null;
  return `inset(${top}px 0 ${viewportH - bottom}px 0)`;
}
