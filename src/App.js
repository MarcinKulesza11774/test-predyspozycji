import './App.css';
import Quiz from './Quiz.js';
import ResultScreen from './ResultScreen.js';
import React, { useState } from 'react';
import logo from './images/logo.png'

function App() {
  const [showResult, setShowResult] = useState(false);
  const [answersCounter, setAnswersCounter] = useState([0, 0, 0, 0]);
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {!started ? (
        <div className="WelcomePage">
          <img src={logo} alt='logo' style={{width: '45vw'}}/>
          <h1>Quiz zawodowy!</h1>
          <p>Sprawdź która scieżka najlepiej do ciebie pasuje!</p>
          <button onClick={() => setStarted(true)}>Start</button>
        </div>
      ) : showResult ? (
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
