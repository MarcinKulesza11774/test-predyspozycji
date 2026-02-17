import React from 'react';
import './App.css';

class Quiz extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: props.currentQuestion || "question Uno",
            answers: props.answers || ["odp 1", "odp 2", "odp 3", "odp 4"],
            checkedAnswer: null
        };
    }

    // state = {
    //     currentQuestion: "Question Uno",
    //     answers: ["odp 1", "odp 2", "odp 3", "odp 4"],
    //     checkedAnswer: null
    // }

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
                
            </div>
        );
        }
}

export default Quiz;
