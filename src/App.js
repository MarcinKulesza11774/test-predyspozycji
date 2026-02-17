import './App.css';
import Quiz from './Quiz.js';
import React, { useState } from 'react';

function App() {

  const [quizzes] = useState([
    {
        question: "1.  Najlepiej uczysz się, gdy:",
        answers: ["a) rozwiązujesz zadania logiczne i problemy", "b) czytasz i analizujesz teksty", "c) wykonujesz coś ręcznie lub technicznie", "d) uczysz się przez kontakt z ludźmi (rozmowa, pomoc, współpraca)"]
      },
      {
        question: "2.  Gdy masz nowy temat, wolisz: ",
        answers: ["a) samodzielnie szukać rozwiązania i analizować",
                  "b) dostać materiały do czytania i uporządkować notatki", 
                  "c) nauczyć się przez działanie i ćwiczenia praktyczne", 
                  "d) omówić temat z innymi i uczyć się w grupie"]
      },
      {
        question: "co robił pies",
        answers: ["deine mutre", "yo mama", "yayami o mate", "tak"]
      }
    ]);


  return (
    <div className="App">
      {quizzes.map((quiz, index) => (
        <Quiz
          key={index}
          currentQuestion={quiz.question}
          answers={ quiz.answers}
        />
      ))}
    </div>
  );
}
// Quiz z konstruktorem
// <Quiz 
//   startQuestion={5}
//   answers={["A", "B", "C", "D"]}
// />

export default App;
