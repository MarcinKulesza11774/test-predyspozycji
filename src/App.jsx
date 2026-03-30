import './App.css';
import Quiz from './Quiz.jsx';
import ResultScreen from './ResultScreen.jsx';
import React, { useState } from 'react';
import logo from './assets/logo.png'

function App() {
  const [showResult, setShowResult] = useState(false);
  const [answersCounter, setAnswersCounter] = useState([0, 0, 0, 0]);
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {!started ? (
        <div className="WelcomePage">
          <img src={logo} alt='logo' style={{width: '45vw'}}/>
          <h1>Test predyspozycji: wybór profilu / zawodu </h1>
          <p>W jakiej dziedzinie czujesz się mocny? Sprawdź, którą ścieżkę kariery powinieneś wybrać! <br></br>
            Skorzystaj z profesjonalnej pomocy i znajdź swoją drogę zawodową. </p>
            <p>Instrukcja: Przy każdym pytaniu wybierz jedną odpowiedź: A, B, C lub D. </p>
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
