import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Minion from "./Components/Minion";
import Player from "./Components/Player"
import Store from "./Components/Store"


import { GameState } from "./Context/GameState";

function App() {
  const [level, setLevel] = useState(1);
  const [damage, setDamage] = useState(1);
  const [money, setMoney] = useState(0);

  return (
    <GameState.Provider value={{level, setLevel, damage, setDamage, money, setMoney}}>
    <div>
      <Header />
      <Body>
        <Minion  />
      </Body>
        <Player/>
        <Store/>
    </div>
    </GameState.Provider>
  );
}

export default App;
