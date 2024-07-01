import { expect, it } from "vitest";
import { scale } from "./utilities";

it("equals outMin when number equals inMin", () => {
  expect(scale(1, 1, 5, -100, 100)).toBe(-100);
});

it("equals outMax when number equals inMax", () => {
  expect(scale(5, 1, 5, -100, 100)).toBe(100);
});

it("equals avg(outMin, outMax) when number equals avg(inMin, inMax)", () => {
  expect(scale(3, 1, 5, -100, 100)).toBe(0);
});
