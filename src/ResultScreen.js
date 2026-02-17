import React from 'react';
import './App.css';

class ResultScreen extends React.Component {
    render() {

        const { answersCounter } = this.props;

        const resultTexts = [
            "A – profil analityczno-informatyczny",
            "B – profil humanistyczno-językowy",
            "C – profil techniczno-praktyczny",
            "D – profil społeczno-usługowy"
        ];

        const maxIndex = answersCounter.indexOf(Math.max(...answersCounter));

        return (
            <div className="ResultScreen">
                <h1>Twój wynik:</h1>
                <p>{resultTexts[maxIndex]}</p>
            </div>
        );
    }
}

export default ResultScreen;
