import { Calculator } from "../src/calculator";
import { describe, it, expect, beforeEach } from "vitest";

describe("Calculator", () => {
    let calculator: Calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should add two numbers corretcly", () => {
        expect(calculator.add(2,3)).toBe(5);
    });

    it("should subtract two numbers corretcly", () => {
        expect(calculator.subtract(5,3)).toBe(2);
    });

    it("should multiply two numbers corretcly", () => {
        expect(calculator.multiply(4,3)).toBe(12);
    });

    it("should store history of calculations ", () => {
        calculator.add(2,2);
        calculator.subtract(6,3);
        calculator.multiply(3,3);
        expect (calculator.getHistory()).toEqual([
            {operation: "+", operands: [2,2], res: 4},
            {operation: "-", operands: [6,3], res: 3},
            {operation: "*", operands: [3,3], res: 9},
        ]);
    });

    it("should clear history", () => {
        calculator.add(1,1);
        calculator.clearHistory();
        expect(calculator.getHistory()).toEqual([]);
    });
});