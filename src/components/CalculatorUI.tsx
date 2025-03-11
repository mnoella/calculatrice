import { useState } from "react";
import { Calculator } from "../calculator";

export default function CalculatorUI() {
  const [calculator] = useState(new Calculator());
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState(calculator.getHistory());

  const handleCalculate = (operation: "add" | "subtract" | "multiply") => {
    const [a, b] = input.split(" ").map(Number);
    if (isNaN(a) || isNaN(b)) return;

    let res;
    if (operation === "add") res = calculator.add(a, b);
    if (operation === "subtract") res = calculator.subtract(a, b);
    if (operation === "multiply") res = calculator.multiply(a, b);

    setResult(res!);
    setHistory([...calculator.getHistory()]);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Calculatrice</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Entrez deux nombres (ex: 5 3)"
        className="border p-2 w-full"
      />
      <div className="flex space-x-2">
        <button className="p-2 bg-blue-500 text-white rounded" onClick={() => handleCalculate("add")}>+</button>
        <button className="p-2 bg-green-500 text-white rounded" onClick={() => handleCalculate("subtract")}>-</button>
        <button className="p-2 bg-red-500 text-white rounded" onClick={() => handleCalculate("multiply")}>*</button>
      </div>
      {result !== null && <p>Résultat : {result}</p>}
      <h2 className="text-lg font-semibold">Historique</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry.operands.join(` ${entry.operation} `)} = {entry.res}</li>
        ))}
      </ul>
    </div>
  );
}
