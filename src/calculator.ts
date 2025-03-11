export class Calculator {
    private history: { operation: string; operands: number[]; res: number }[] = [];

    add(a: number, b: number): number {
        const res = a + b;
        this.history.push({ operation: "+", operands: [a,b], res });
        return res;
    }

    subtract(a: number, b: number): number {
        const res = a - b;
        this.history.push({ operation: "-", operands: [a,b], res });
        return res;
    }

    multiply(a: number, b: number): number {
        const res = a * b;
        this.history.push({ operation: "*", operands: [a,b], res });
        return res;
    }

    getHistory(){
        return this.history;
    }

    clearHistory(){
        this.history = [];
    }

    getPreviousCalculation(index: number) {
        if (index < 0 || index >= this.history.length) {
            throw new Error("Index hors limites");
        }
        return this.history[index];
    }
    
}