import React from 'react';
import './App.css';
import {questions} from "./Questions.js"

class Quiz extends React.Component{

    state = {
        currentQuestionIndex: 0,
        answersCounter: [0, 0, 0, 0],
        checkedAnswers: new Array(questions.length).fill(null),
        showModal: false,
        modalMessage: ''
    }


    showModal = (message) => {
        this.setState({
            showModal: true,
            modalMessage: message
        });
    }

    hideModal = () => {
        this.setState({ showModal: false, modalMessage: '' });
    }

    validateAnswers = () => {
    const unansweredIndex = this.state.checkedAnswers.findIndex(
        answer => answer === null
    );

    if (unansweredIndex !== -1) {
        this.showModal(`Proszę odpowiedzieć na pytanie ${unansweredIndex + 1}.`);
        this.setState({ currentQuestionIndex: unansweredIndex });
        return false;
    }

    return true;
}


    nextQuestion = () => {
    if (this.state.currentQuestionIndex < questions.length - 1) {
            this.setState({
                currentQuestionIndex: this.state.currentQuestionIndex + 1
            });
        }
    }

    prevQuestion = () => {
        if (this.state.currentQuestionIndex > 0) {
            this.setState({
                currentQuestionIndex: this.state.currentQuestionIndex - 1
            });
        }
    }

    selectQuestion = (questionIndex) => {
        this.setState({
                currentQuestionIndex: questionIndex
            });
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

        const { currentQuestionIndex, checkedAnswers } = this.state;
        const question = questions[currentQuestionIndex];

        return (
            <>
                <div className="Quiz">

                    <h1>
                        Pytanie {currentQuestionIndex + 1} / {questions.length}
                    </h1>

                    <h2>{question.question}</h2>

                    {question.answers.map((answer, answerIndex) => (
                        <p
                            key={answer}
                            className={`quizAnswer ${
                                checkedAnswers[currentQuestionIndex] === answerIndex
                                ? 'checkedAnswer'
                                : ''
                            }`}
                            onClick={() => this.checkAnswer(currentQuestionIndex, answerIndex)}
                        >
                            {answer}
                        </p>
                    ))}

                    {this.state.showModal && (
                    <div className="modalOverlay">
                        <div className="modalContent">
                            <p>{this.state.modalMessage}</p>
                            <button onClick={this.hideModal}>OK</button>
                        </div>
                    </div>
                )}

                    <div style={{marginTop: "20px"}} className='nav'>

                        {currentQuestionIndex > 0 && (
                            <button onClick={this.prevQuestion}>
                                Poprzednie
                            </button>
                        )}

                        <select
                            value={currentQuestionIndex}
                            onChange={(e) => this.selectQuestion(Number(e.target.value))}
                        >
                                {questions.map((_, i) => (
                                <option key={i} value={i}>{i+1}</option>
                            ))}

                        </select>

                        {currentQuestionIndex < questions.length - 1 ? (
                            <button onClick={this.nextQuestion}>
                                Następne
                            </button>
                        ) : (
                            <button
                                className='nextQuestionBtn'
                                onClick={() => {
                                    if (this.validateAnswers()) {
                                        this.props.setFinalAnswers(this.state.answersCounter);
                                        this.props.onShowResult();
                                    }
                                }}
                            >
                                Wyniki
                            </button>
                        )}

                    </div>

                </div>
            </>
        );
    }
}

export default Quiz;
