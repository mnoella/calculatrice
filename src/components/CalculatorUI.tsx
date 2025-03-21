import { useState } from "react";
import { Calculator } from "../calculator";
import './CalculatorUI.css'; 

export default function CalculatorUI() {
  const [calculator] = useState(new Calculator());
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState(calculator.getHistory());

  const handleCalculate = () => {
    try {
      const sanitizedInput = input.replace(/,/g, ".");
  
      const res = new Function("return " + sanitizedInput)();
      setResult(res);
  
      const match = sanitizedInput.match(/(-?\d+(\.\d+)?)\s*([\+\-\*])\s*(-?\d+(\.\d+)?)/);
      if (match) {
        const [, operand1, , operation, operand2] = match;
  
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);
  
        switch (operation) {
          case "+":
            calculator.add(num1, num2);
            break;
          case "-":
            calculator.subtract(num1, num2);
            break;
          case "*":
            calculator.multiply(num1, num2);
            break;
        }
      } 
  
      //Historique
      setHistory([...calculator.getHistory()]);
      setInput(""); 
    } catch (error) {
      console.error("Erreur dans le calcul:", error);
      setResult(null);
    }
  };
  

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleInput = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleRecall = (index: number) => {
    try {
        const previousCalculation = calculator.getPreviousCalculation(index);
        setInput(previousCalculation.res.toString()); // Lors de la recuperation d'une opération dans l'historique le dernier résultat est comme nouvelle entrée
        setResult(previousCalculation.res);
    } catch (error) {
        console.error("Erreur lors de la récupération du calcul précédent:", error);
        alert("Impossible de récupérer le calcul précédent.");
    }
  };


  const handleClearHistory = () => {
    calculator.clearHistory();
    setHistory(calculator.getHistory());
  };

  return (
    <div className="calculator-container">
      <div className="history">
        <h2>Historique</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index} onClick={() => handleRecall(index)}>
              {entry.operands.join(` ${entry.operation} `)} = {entry.res}
            </li>
          ))}
        </ul>
        <button onClick={handleClearHistory}>Effacer</button>
      </div>
      <div className="calculator">
        <div className="calculator-display">
          <p className="input-display">{input}</p>
          <p className="result-display">{result !== null ? result : ""}</p>
        </div>
        <div className="grid">
          {["7", "8", "9", "*"].map((value) => (
            <button key={value} className="button number" onClick={() => handleInput(value)}>
              {value}
            </button>
          ))}
          {["4", "5", "6", "-"].map((value) => (
            <button key={value} className="button number" onClick={() => handleInput(value)}>
              {value}
            </button>
          ))}
          {["1", "2", "3", "+"].map((value) => (
            <button key={value} className="button number" onClick={() => handleInput(value)}>
              {value}
            </button>
          ))}
          <button className="button ac" onClick={handleClear}>AC</button>
          <button className="button number" onClick={() => handleInput("0")}>0</button>
          <button className="button number" onClick={() => handleInput(",")}>,</button>
          <button className="button equal" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}
