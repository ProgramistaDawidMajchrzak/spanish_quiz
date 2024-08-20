import React, { useState } from 'react';
import MobileBox from './mobile-box';
import Logo from '../images/flag-spain.jpeg';
import { Motion } from './motion';
import { AnimatePresence } from 'framer-motion';

function Question({ setStartGame, shaffledQuestions, setRzeczMode }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showEsp, setShowEsp] = useState(false);
    //const [showScore, setShowScore] = useState(false);
    //const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    //const [correctAnswer, setCorrectAnswer] = useState(false);
    const [questionsCounter, setQuestionsCounter] = useState(1);

    const handleClickAnswer = (answer, correctAnswer) => {
        setSelectedAnswer(answer);
        //setCorrectAnswer(correctAnswer);
        if (answer.is_correct) {
            //setScore(score + 1);
        }
        setTimeout(() => {
            setSelectedAnswer(null);
            //setCorrectAnswer(null);
            handleNextQuestion();
        }, 750);
    };

    const handleNextQuestion = () => {
        if (questionsCounter < 20) {
            setQuestionsCounter(questionsCounter + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < shaffledQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setStartGame(false)
            //setShowScore(true);
        }
    };

    // const handleEnding = (score) => {
    //     if (score >= 1 && score <= 5) {
    //         return 'Na pewno dasz radę lepiej!';
    //     } else if (score >= 6 && score <= 9) {
    //         return 'Posiadasz dużą wiedzę w grze MINECRAFT, BRAWO!';
    //     } else if (score >= 10) {
    //         return 'Jesteś mistrzem w grę MINECRAFT! GRATULACJE!';
    //     } else {
    //         return '';
    //     }
    // }

    return (
        <MobileBox>
            
            <img className='logo' style={{width: '30%'}} src={Logo} alt="logo" />
            <div>
                <span className='score'>{questionsCounter}/20</span>
                <button onClick={() => {
                             setStartGame(false);
                        }} className='exit-btn'>Wstecz</button>
            </div>
            <AnimatePresence mode="wait">
                    <Motion key={currentQuestion}>
                        <h2>{shaffledQuestions[currentQuestion].eng}</h2>

                        <div className='answers' onClick={() => {
                                if(!showEsp){
                                    setShowEsp(true);
                                }else{
                                    setShowEsp(false);
                                    handleNextQuestion();
                                }
                            }}>
                                {showEsp && 
                                    <>
                                        <h2 className='esp' style={{marginBottom: '1rem'}}>{shaffledQuestions[currentQuestion].esp}</h2>
                                        
                                        {shaffledQuestions[currentQuestion].var && shaffledQuestions[currentQuestion].var.map(v => <h2 className='esp small'>{v}</h2>)}
                                    </>
                                }
                        </div>



                        {/* <div className="answers">
                            {shaffledQuestions[currentQuestion].answers.map((a, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleClickAnswer(a, shaffledQuestions[currentQuestion].answers.find(el => el.is_correct === true))}
                                    className={`answer ${selectedAnswer === a ? (a.is_correct ? 'correct' : 'incorrect') : ''} ${correctAnswer === a && 'correct'}`}
                                >
                                    {a.answer}
                                </div>
                            ))}
                        </div> */}


                    </Motion>
            </AnimatePresence>
        </MobileBox>
    );
}

export default Question;
