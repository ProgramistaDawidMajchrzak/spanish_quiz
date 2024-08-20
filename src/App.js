import React, { useState } from 'react';
import Question from './views/question';
import Welcome from './views/welcome';
import './App.css';

import wyrazenia from './jsons-assets/wyrazenia.json';
import rzeczOgolne from './jsons-assets/rzeczowniki/rzecz-ogolne.json';
import rzeczJedzenie from './jsons-assets/rzeczowniki/rzecz-jedzenie.json';
import rzeczOdziez from './jsons-assets/rzeczowniki/rzecz-odziez.json';
import rzeczMeble from './jsons-assets/rzeczowniki/rzecz-meble.json';
import przymiotniki from './jsons-assets/przymiotniki.json';
import czasowniki from './jsons-assets/czasowniki.json';
// import QrCode from './views/qr';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [mode, setMode] = useState("");
  const [rzeczMode, setRzeczMode] = useState(false);

  const shaffleQuestions = (howMany, mode) => {

    let selectedData;

    switch (mode) {
      case "wyrazenia":
        selectedData = wyrazenia;
        break;
      case "rzeczowniki":
        selectedData = rzeczOgolne;
        break;
      case "czasowniki":
          selectedData = czasowniki;
          break;
      case "przymiotniki":
        selectedData = przymiotniki;
        break;
      case "rzeczJedzenie":
        selectedData = rzeczJedzenie;
        break;
      case "rzeczMeble":
        selectedData = rzeczMeble;
        break;
      case "rzeczOdziez":
        selectedData = rzeczOdziez;
        break;
      default:
        break;
    }
    
    const questionsCopy = [...selectedData];

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
          shaffledQuestions={shaffleQuestions(20, mode)}
          setRzeczMode={setRzeczMode}
          rzeczMode={rzeczMode}
        />
        :
        <Welcome
          setStartGame={setStartGame}
          setMode={setMode}
          setRzeczMode={setRzeczMode}
        />
      }
      {/* <QrCode /> */}
    </div>
  );
}

export default App;
