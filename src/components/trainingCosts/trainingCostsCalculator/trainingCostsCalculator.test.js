import { expect, it } from "vitest";
import { calculateTrainingCosts } from "./trainingCostsCalculator";

it("equals 0 when numberOfEmployees is 0", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "0",
      cost: "100",
      includeLostProductivityCosts: false,
      creditOption: "",
      wageType: "",
      averageWage: "0",
    })
  ).toBe(0);
});

it("equals 0 when cost is 0 and includeLostProductivityCosts is false", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "100",
      cost: "0",
      includeLostProductivityCosts: false,
      creditOption: "",
      wageType: "",
      averageWage: "0",
    })
  ).toBe(0);
});

it("calculates correctly for non-zero numberOfEmployees and cost when includeLostProductivityCosts is false", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "5",
      cost: "100",
      includeLostProductivityCosts: false,
      creditOption: "",
      wageType: "",
      averageWage: "0",
    })
  ).toBe(500);
});

it("adds no additional lost productivity cost when averageWage is 0", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "5",
      cost: "100",
      includeLostProductivityCosts: true,
      creditOption: "Non-Credit: 32 Hours",
      wageType: "Hourly",
      averageWage: "0",
    })
  ).toBe(500);
});

it("adds 32 hours of lost productivity cost for 32-hour credit option", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "5",
      cost: "100",
      includeLostProductivityCosts: true,
      creditOption: "Non-Credit: 32 Hours",
      wageType: "Hourly",
      averageWage: "10",
    })
  ).toBe(2100);
});

it("adds 60 hours of lost productivity cost for 60-hour credit option", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "5",
      cost: "100",
      includeLostProductivityCosts: true,
      creditOption: "For-Credit: 60 Hours",
      wageType: "Hourly",
      averageWage: "10",
    })
  ).toBe(3500);
});

it("adds 90 hours of lost productivity cost for 90-hour credit option", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "5",
      cost: "100",
      includeLostProductivityCosts: true,
      creditOption: "For-Credit: 90 Hours",
      wageType: "Hourly",
      averageWage: "10",
    })
  ).toBe(5000);
});

it("converts annual wage to hourly wage", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "5",
      cost: "100",
      includeLostProductivityCosts: true,
      creditOption: "Non-Credit: 32 Hours",
      wageType: "Annual",
      averageWage: "20800",
    })
  ).toBe(2100);
});
