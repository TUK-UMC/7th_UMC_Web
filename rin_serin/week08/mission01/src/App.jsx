import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import TodoDetailPage from './page/TodoDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo/:id" element={<TodoDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
