import './App.css';
import Quiz from './Quiz.js';
import ResultScreen from './ResultScreen.js';
import React, { useState } from 'react';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [answersCounter, setAnswersCounter] = useState([0, 0, 0, 0]);

  return (
    <div className="App">
      {showResult ? (
        <ResultScreen answersCounter={answersCounter} />
      ) : (
        <Quiz 
          onShowResult={() => setShowResult(true)} 
          setFinalAnswers={setAnswersCounter}
        />
      )}
    </div>
  );
}

export default App;
