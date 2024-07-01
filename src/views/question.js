import React, { useState } from 'react';
import MobileBox from './mobile-box';
import Logo from '../images/logo.svg';
import { Motion } from './motion';
import { AnimatePresence } from 'framer-motion';

function Question({ setStartGame, shaffledQuestions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [questionsCounter, setQuestionsCounter] = useState(1);

    const handleClickAnswer = (answer, correctAnswer) => {
        setSelectedAnswer(answer);
        setCorrectAnswer(correctAnswer);
        if (answer.is_correct) {
            setScore(score + 1);
        }
        setTimeout(() => {
            setSelectedAnswer(null);
            setCorrectAnswer(null);
            handleNextQuestion();
        }, 750);
    };

    const handleNextQuestion = () => {
        if (questionsCounter < 10) {
            setQuestionsCounter(questionsCounter + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < shaffledQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleEnding = (score) => {
        if (score >= 1 && score <= 5) {
            return 'Na pewno dasz radę lepiej!';
        } else if (score >= 6 && score <= 9) {
            return 'Posiadasz dużą wiedzę w grze MINECRAFT, BRAWO!';
        } else if (score >= 10) {
            return 'Jesteś mistrzem w grę MINECRAFT! GRATULACJE!';
        } else {
            return '';
        }
    }

    return (
        <MobileBox>
            <img className='logo' src={Logo} alt="logo" />
            <span className='score'>{questionsCounter}/10</span>
            <AnimatePresence mode="wait">
                {showScore ? (
                    <Motion key="score">
                        <h2>
                            Twój wynik to {score}/{shaffledQuestions.length}
                        </h2>
                        <h2>
                            {handleEnding(score)}
                        </h2>
                        <button style={{ left: '50%', transform: 'translate(-50%, 0)' }} onClick={() => setStartGame(false)} className='start-btn'>ZACZNIJ OD NOWA</button>
                    </Motion>
                ) : (
                    <Motion key={currentQuestion}>
                        <h2>{shaffledQuestions[currentQuestion].question}</h2>
                        <div className="answers">
                            {shaffledQuestions[currentQuestion].answers.map((a, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleClickAnswer(a, shaffledQuestions[currentQuestion].answers.find(el => el.is_correct === true))}
                                    className={`answer ${selectedAnswer === a ? (a.is_correct ? 'correct' : 'incorrect') : ''} ${correctAnswer === a && 'correct'}`}
                                >
                                    {a.answer}
                                </div>
                            ))}
                        </div>
                    </Motion>
                )}
            </AnimatePresence>
        </MobileBox>
    );
}

export default Question;
