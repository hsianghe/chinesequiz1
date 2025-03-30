import React, { useState } from "react";
import { quizData } from "./quizData";

function App() {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const question = quizData[current];

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>國文模擬試題</h1>
      <h2>第 {current + 1} 題 / 共 {quizData.length} 題</h2>
      <p style={{ fontWeight: "bold" }}>{question.question}</p>
      {question.options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => setShowAnswer(true)}
          style={{
            display: "block",
            marginBottom: 8,
            padding: 10,
            width: "100%",
            backgroundColor:
              showAnswer && idx === question.answer ? "#d4f4dd" : "#f0f0f0",
            border: "1px solid #ccc"
          }}
        >
          {String.fromCharCode(65 + idx)}. {opt}
        </button>
      ))}
      {showAnswer && (
        <div style={{ marginTop: 10, color: "green" }}>
          ✅ 正解：{String.fromCharCode(65 + question.answer)}
        </div>
      )}
      <div style={{ marginTop: 20 }}>
        <button onClick={() => {
          setCurrent(Math.max(current - 1, 0));
          setShowAnswer(false);
        }} disabled={current === 0}>
          上一題
        </button>
        <button
          onClick={() => {
            setCurrent(Math.min(current + 1, quizData.length - 1));
            setShowAnswer(false);
          }}
          style={{ marginLeft: 10 }}
          disabled={current === quizData.length - 1}
        >
          下一題
        </button>
      </div>
    </div>
  );
}

export default App;
