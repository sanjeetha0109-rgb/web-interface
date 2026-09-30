import { useState } from "react";
import "./Calculator.css";

function evaluateExpression(expression) {
  const normalized = expression.replace(/\s+/g, "");
  const tokens = normalized.match(/\d*\.?\d+|[()+\-*/%]/g) ?? [];
  let position = 0;

  if (!normalized || tokens.join("") !== normalized) {
    throw new Error("Invalid expression");
  }

  function parsePrimary() {
    const token = tokens[position++];

    if (token === "+") return parsePrimary();
    if (token === "-") return -parsePrimary();
    if (token === "(") {
      const value = parseExpression();
      if (tokens[position++] !== ")") throw new Error("Unclosed parenthesis");
      return value;
    }
    if (/^(?:\d+\.?\d*|\.\d+)$/.test(token ?? "")) return Number(token);

    throw new Error("Invalid expression");
  }

  function parseTerm() {
    let value = parsePrimary();

    while (["*", "/", "%"].includes(tokens[position])) {
      const operator = tokens[position++];
      const next = parsePrimary();
      if (operator === "*") value *= next;
      if (operator === "/") value /= next;
      if (operator === "%") value %= next;
    }

    return value;
  }

  function parseExpression() {
    let value = parseTerm();

    while (["+", "-"].includes(tokens[position])) {
      const operator = tokens[position++];
      const next = parseTerm();
      value = operator === "+" ? value + next : value - next;
    }

    return value;
  }

  const result = parseExpression();
  if (position !== tokens.length || !Number.isFinite(result)) {
    throw new Error("Invalid expression");
  }
  return result;
}

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleDelete = () => {
    setInput((prev) =>
      prev.length > 1 ? prev.slice(0, -1) : ""
    );
  };

  const handleReset = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(evaluateExpression(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">

      <div className="display">
        {input || "0"}
      </div>

      <div className="buttons">

        <button className="btn gray" onClick={handleDelete}>
          DEL
        </button>

        <button className="btn red" onClick={handleReset}>
          {input === "" ? "AC" : "RESET"}
        </button>

        <button
          className="btn orange"
          onClick={() => handleClick("%")}
        >
          %
        </button>

        <button
          className="btn orange"
          onClick={() => handleClick("/")}
        >
          ÷
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick("7")}
        >
          7
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick("8")}
        >
          8
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick("9")}
        >
          9
        </button>

        <button
          className="btn orange"
          onClick={() => handleClick("*")}
        >
          ×
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick("4")}
        >
          4
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick("5")}
        >
          5
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick("6")}
        >
          6
        </button>

        <button
          className="btn orange"
          onClick={() => handleClick("-")}
        >
          −
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick("1")}
        >
          1
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick("2")}
        >
          2
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick("3")}
        >
          3
        </button>

        <button
          className="btn orange"
          onClick={() => handleClick("+")}
        >
          +
        </button>

        <button
          className="btn blue zero"
          onClick={() => handleClick("0")}
        >
          0
        </button>

        <button
          className="btn blue"
          onClick={() => handleClick(".")}
        >
          .
        </button>

        <button
          className="btn green equal"
          onClick={calculate}
        >
          =
        </button>

      </div>
    </div>
  );
}

export default Calculator;