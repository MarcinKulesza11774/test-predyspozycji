import React from 'react';
import './App.css';
import { results } from "./Results.js";
import logo from './images/logo.png'

class ResultScreen extends React.Component {
    render() {

        const { answersCounter } = this.props;

        const maxIndex = answersCounter.indexOf(Math.max(...answersCounter));
        const finalResult = results[maxIndex];

        return (
            <div className="ResultScreen">
                <img src={logo} alt='logo' style={{width: '45vw'}}/>
                <h1>{finalResult.resultTitle}</h1>
                <h3>{finalResult.resultContent}</h3>
                <p>Wynik testu ma charakter pomocniczy i służy wsparciu ucznia w rozpoznaniu jego zainteresowań oraz predyspozycji edukacyjno-zawodowych.
                    <br></br>
                    W celu pogłębienia wyników oraz omówienia ich możesz skonsultować się z doradcą zawodowym w szkole lub doradcą zawodowym w Poradni Psychologiczno-Pedagogicznej nr 2 lub w Zespole Poradni Psychologiczno-Pedagogicznych nr 1. 
                    <br></br>
                    <br></br>
                    Autorką testu jest doradca zawodowy Zespołu Poradni Psychologiczno-Pedagogicznej nr 1: Katarzyna Bukalska. <br></br>
                    Projekt i wykonanie aplikacji internetowej: Mateusz Balcerak, Marcin Kulesza </p>
            </div>
        );
    }
}

export default ResultScreen;
