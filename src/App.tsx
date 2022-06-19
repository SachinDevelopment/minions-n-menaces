import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Minion from "./Components/Minion";
import Player from "./Components/Player";
import Store from "./Components/Upgrades/Store";

import { GameState } from "./Context/GameState";

function App() {
  const [level, setLevel] = useState(1);
  const [damage, setDamage] = useState(1);
  const [money, setMoney] = useState(0);
  const [time, setTime] = useState(0);
  const [clickDamage, setClickDamage] = useState(1);

  return (
    <GameState.Provider
      value={{
        level,
        setLevel,
        damage,
        setDamage,
        money,
        setMoney,
        setClickDamage,
        clickDamage,
        time,
        setTime,
      }}
    >
      <div>
        <Header />
        <div>
          <div className="flex w-full border-2 justify-between">
          <Player />
          <Minion />
          </div>
          
          <Store />
        </div>
      </div>
    </GameState.Provider>
  );
}

export default App;
