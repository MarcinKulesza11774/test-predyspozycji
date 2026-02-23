import React from 'react';
import './App.css';
import { results } from "./Results.js";

class ResultScreen extends React.Component {
    render() {

        const { answersCounter } = this.props;

        const maxIndex = answersCounter.indexOf(Math.max(...answersCounter));
        const finalResult = results[maxIndex];

        return (
            <div className="ResultScreen">
                <h1>{finalResult.resultTitle}</h1>
                <h3>{finalResult.resultContent}</h3>
                <p>Wynik testu ma charakter pomocniczy i służy wsparciu ucznia w rozpoznaniu jego zainteresowań oraz predyspozycji edukacyjno-zawodowych.  
W celu pogłębienia wyników oraz omówienia indywidualnych predyspozycji, zainteresowań i możliwości edukacyjnych istnieje możliwość konsultacji z doradcą zawodowym szkolnym lub doradcą zawodowym w Poradni Psychologiczno-Pedagogicznej. 
Opracowała: doradca zawodowy ZPPP: Katarzyna Bukalska </p>
            </div>
        );
    }
}

export default ResultScreen;
