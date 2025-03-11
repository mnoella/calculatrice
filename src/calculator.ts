export class Calculator {
    private history: { operation: string; operands: number[]; res: number }[] = [];

    add(a: number, b: number): number {
        const res = a + b;
        this.history.push({ operation: "add", operands: [a,b], res });
        return res;
    }

    subtract(a: number, b: number): number {
        const res = a - b;
        this.history.push({ operation: "subtract", operands: [a,b], res });
        return res;
    }

    multiply(a: number, b: number): number {
        const res = a * b;
        this.history.push({ operation: "multiply", operands: [a,b], res });
        return res;
    }

    getHistory(){
        return this.history;
    }

    clearHistory(){
        this.history = [];
    }
}