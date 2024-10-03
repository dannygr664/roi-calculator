import { expect, it } from "vitest";
import { calculateTrainingCosts } from "./trainingCostsCalculator";

it("equals 0 when numberOfEmployees is 0", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "0",
      cost: "100",
      includeLostProductivityCosts: false,
      creditOption: "",
      wageRowData: [],
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
      wageRowData: [],
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
      wageRowData: [],
    })
  ).toBe(500);
});

it("equals 0 when numberOfEmployees is 0 and includeLostProductivityCosts is true", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "0",
      cost: "100",
      includeLostProductivityCosts: true,
      creditOption: "Non-Credit: 32 Hours",
      wageRowData: [],
    })
  ).toBe(0);
});

it("adds no additional lost productivity cost when averageWage is 0", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "5",
      cost: "100",
      includeLostProductivityCosts: true,
      creditOption: "Non-Credit: 32 Hours",
      wageRowData: [{ wageType: "Hourly", wage: 0, numberOfEmployees: 1 }],
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
      wageRowData: [{ wageType: "Hourly", wage: 10, numberOfEmployees: 5 }],
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
      wageRowData: [{ wageType: "Hourly", wage: 10, numberOfEmployees: 5 }],
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
      wageRowData: [{ wageType: "Hourly", wage: 10, numberOfEmployees: 5 }],
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
      wageRowData: [{ wageType: "Annual", wage: 20800, numberOfEmployees: 5 }],
    })
  ).toBe(2100);
});

it("calculates average wage of multiple wage row entries", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "5",
      cost: "100",
      includeLostProductivityCosts: true,
      creditOption: "Non-Credit: 32 Hours",
      wageRowData: [
        { wageType: "Hourly", wage: 7, numberOfEmployees: 3 },
        { wageType: "Hourly", wage: 20, numberOfEmployees: 1 },
        { wageType: "Hourly", wage: 9, numberOfEmployees: 1 },
      ],
    })
  ).toBe(2100);
});

it("calculates average wage with mixed wage types", () => {
  expect(
    calculateTrainingCosts({
      numberOfEmployees: "5",
      cost: "100",
      includeLostProductivityCosts: true,
      creditOption: "Non-Credit: 32 Hours",
      wageRowData: [
        { wageType: "Hourly", wage: 15, numberOfEmployees: 2 },
        { wageType: "Annual", wage: 5200, numberOfEmployees: 1 },
        { wageType: "Hourly", wage: 15, numberOfEmployees: 1 },
        { wageType: "Annual", wage: 5200, numberOfEmployees: 1 },
      ],
    })
  ).toBe(2100);
});
