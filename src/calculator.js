import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        switch (value) {
            case "=":
                try {
                    setResult(eval(input).toString());
                } catch (error) {
                    console.error("Error", error);
                    setResult("Error");
                }
                break;
            case "C":
                setResult("");
                setInput("");
                break;
            default:
                setInput((prevInput) => prevInput + value);
        }

        // if(value === "="){
        //     try{
        //         setResult(eval(input).toString())
        //     }catch(error){
        //         console.log("error")
        //     }
        // }else if(value==="C"){
        //     setResult('');
        //     setInput('')
        // }else{
        //     setInput((prevInput)=>prevInput+value)
        // }
    };

    const renderButton = (value) => (
        <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
        </button>
    );

    const buttonRows = [
        ["1", "2", "3", "C"],
        ["4", "5", "6", "-"],
        ["7", "8", "9", "*"],
        [".", "+", "/", "0"],
        ["="],
    ];

    return (
        <>
            <div className="calculator-container">
                <div className="calculator-title">Calculator</div>
                <div className="input-display">
                    <input className="input-style" type="text" value={input} readOnly />
                </div>
                <div className="button-grid">
                    {buttonRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="button-row">
                            {row.map((button) => renderButton(button))}
                        </div>
                    ))}
                </div>
                <div className="result-display">
                    <p className="result">Result: {result}</p>
                </div>
            </div>
        </>
    );
};

export default Calculator;

