import React from 'react';
import './App.css';
import {questions} from "./Questions.js"

class Quiz extends React.Component{

    state = {
        answersCounter: [0, 0, 0, 0],
        checkedAnswers: new Array(questions.length).fill(null)
    }

    checkAnswer = (questionIndex, answerIndex) => {
    this.setState(prevState => {

        const newChecked = [...prevState.checkedAnswers];
        const newCounter = [...prevState.answersCounter];

        const prevAnswer = newChecked[questionIndex];

        if(prevAnswer !== null){
            newCounter[prevAnswer]--;
        }

        newChecked[questionIndex] = answerIndex;
        newCounter[answerIndex]++;

        return {
            checkedAnswers: newChecked,
            answersCounter: newCounter
        }
    });
}

    render() {

        const { onShowResult } = this.props;

        return (
            <div className="Quiz">

                {questions.map((q, questionIndex) => (
                    <div key={questionIndex}>
                        <h1>{q.question}</h1>

                        {q.answers.map((answer, answerIndex) => (
                            <p
                            key={answer}
                            className={`quizAnswer
                            ${this.state.checkedAnswers[questionIndex] === answerIndex ? 'checkedAnswer' : ''}
                            `}
                            onClick={() => this.checkAnswer(questionIndex, answerIndex)}
                            >
                                {answer}
                            </p>
                        ))}

                    </div>
                ))}

                <button
                    className='nextQuestionBtn'
                    onClick={() => {
                        this.props.setFinalAnswers(this.state.answersCounter);
                        this.props.onShowResult();
                    }}>
                    pokaż wynik
                </button>

            </div>
        );
    }
}

export default Quiz;
