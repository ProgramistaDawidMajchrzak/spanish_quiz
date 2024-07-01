import React, { useState } from 'react';
import Question from './views/question';
import Welcome from './views/welcome';
import './App.css';
import QuestionData from './questions.json';
// import QrCode from './views/qr';

function App() {
  const [startGame, setStartGame] = useState(false);
  const shaffleQuestions = (howMany) => {
    const questionsCopy = [...QuestionData];

    for (let i = questionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
    }

    return questionsCopy.slice(0, howMany);
  }

  return (
    <div>
      {startGame ?
        <Question
          setStartGame={setStartGame}
          shaffledQuestions={shaffleQuestions(10)}
        />
        :
        <Welcome
          setStartGame={setStartGame}
        />
      }
      {/* <QrCode /> */}
    </div>
  );
}

export default App;
