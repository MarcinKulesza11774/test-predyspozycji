import React from 'react';
import './App.css';

class Quiz extends React.Component{
    state = {
        currentQuestion: 1,
        answers: ["odp 1", "odp 2", "odp 3", "odp 4"],
        checkedAnswer: null
    }

    checkAnswer = answer => {
        this.setState({checkedAnswer: answer});
    }

    nextQuestion = () =>{
        this.setState(prevState => ({
            currentQuestion: prevState.currentQuestion+1
        }));
    }

    render() {
        const {answers, currentQuestion, checkedAnswer} = this.state;
        return (
            <div className="Quiz">
                <h1>{currentQuestion}</h1>
                {answers.map(answer => (
                    <p 
                    key={answer}
                    className={`quizAnswer
                    ${checkedAnswer === answer ? 'checkedAnswer' : ''}
                    `}
                    onClick={() => this.checkAnswer(answer)}
                    >
                        {answer}
                    </p>
                ))}
                <button
                className='nextQuestionBtn'
                onClick={this.nextQuestion}>
                    kolejne pytanie
                </button>
            </div>
        );
        }
}

export default Quiz;
