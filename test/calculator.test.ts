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
})