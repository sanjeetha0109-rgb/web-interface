import { useState } from "react";
import "./Calculator.css";

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
      setInput(eval(input).toString());
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