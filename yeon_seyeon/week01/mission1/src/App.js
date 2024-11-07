// src/App.js
import React, { useState } from "react";
import "./App.css"; // 스타일 적용을 위해 CSS 파일을 추가해요.

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const completeTask = (index) => {
    const completed = tasks[index];
    setCompletedTasks([...completedTasks, completed]);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const deleteTask = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>UMC Study Plan</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={addTask}
        placeholder="스터디 계획을 작성해보세요!"
      />
      <div className="task-container">
        <div className="task-column">
          <h2>해야 할 일</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => completeTask(index)}>완료</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="task-column">
          <h2>해낸 일</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
