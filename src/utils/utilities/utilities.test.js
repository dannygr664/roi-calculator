import { expect, test } from "vitest";
import { scale } from "./utilities";

test("scale with number = inMin to equal outMin", () => {
  expect(scale(1, 1, 5, -100, 100)).toBe(-100);
});

test("scale with number = inMax to equal outMax", () => {
  expect(scale(5, 1, 5, -100, 100)).toBe(100);
});

test("scale with number = avg(inMin, inMax) to equal avg(outMin, outMax)", () => {
  expect(scale(3, 1, 5, -100, 100)).toBe(0);
});
