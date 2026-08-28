import { describe, it, expect } from "vitest";
import { clipBand } from "lib/clipBand";

describe("clipBand", () => {
  it("clips nothing when the section fills the viewport", () => {
    expect(clipBand(0, 800, 800)).toBe("inset(0px 0 0px 0)");
  });

  it("clips the bottom when the section is exiting off the top", () => {
    expect(clipBand(-200, 600, 800)).toBe("inset(0px 0 200px 0)");
  });

  it("clips the top when the section is entering from the bottom", () => {
    expect(clipBand(500, 1300, 800)).toBe("inset(500px 0 0px 0)");
  });

  it("clips both sides for a short section mid-viewport", () => {
    expect(clipBand(300, 500, 800)).toBe("inset(300px 0 300px 0)");
  });

  it("returns null when the section is fully below the viewport", () => {
    expect(clipBand(900, 1700, 800)).toBeNull();
  });

  it("returns null when the section is fully above the viewport", () => {
    expect(clipBand(-900, -100, 800)).toBeNull();
  });

  it("returns complementary bands for adjacent sections, leaving no seam", () => {
    // Two sections meeting at y=340 must produce insets that exactly abut.
    const above = clipBand(-260, 340, 800);
    const below = clipBand(340, 1100, 800);
    expect(above).toBe("inset(0px 0 460px 0)");
    expect(below).toBe("inset(340px 0 0px 0)");
    expect(800 - 460).toBe(340);
  });
});
