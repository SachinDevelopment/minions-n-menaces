import React, { useState, useEffect, useContext } from "react";
import creature1 from "../Assets/creatures/creature1.gif";
import creature2 from "../Assets/creatures/creature2.gif";
import creature3 from "../Assets/creatures/creature3.gif";
import creature4 from "../Assets/creatures/creature4.gif";
import creature5 from "../Assets/creatures/creature5.gif";

import { GameState } from "../Context/GameState";

const creatures = [creature1, creature2, creature3, creature4, creature5];

const getRandomCreature = () =>
  creatures[Math.floor(Math.random() * creatures.length + 1) - 1];

interface Minion {
  health: number;
}

const Minion = () => {
  const [health, setHealth] = useState(10);
  const [maxHealth, setMaxHealth] = useState(10)
  const [minion, setMinion] = useState(getRandomCreature());
  const gameContext = useContext(GameState);
  const { level, setLevel, damage, setMoney, clickDamage, time, setTime } =
    gameContext;

  const handleDamage = (dmg: number) => {
    if (health - dmg <= 0) {
      setLevel((level: number) => level + 1);
      setHealth(Math.ceil(10 * Math.pow(1.15, level)));
      setMaxHealth(Math.ceil(10 * Math.pow(1.15, level)));
      setMoney((money: number) => money + level * 3);
      setMinion(getRandomCreature());
      setTime(10);
    } else {
      setHealth((health) => health - dmg);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleDamage(damage);
      if (time <= 0) {
        setHealth(Math.ceil(10 * Math.pow(1.15, level)));
        setMaxHealth(Math.ceil(10 * Math.pow(1.15, level)));
        setTime(10);
      }
      setTime((time: number) => time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [handleDamage, setHealth, setTime, time, damage, level]);

  const handleHit = () => {
    handleDamage(clickDamage);
  };
console.log('width?',`${Math.round((health / maxHealth) * 100)} %` )
  return (
    <div
      className="border-2 border-black p-10 bg-slate-800 flex-1 flex flex-col justify-center items-center rounded active:bg-slate-900 select-none text-center text-white ease-in duration-300 cursor-pointer"
      onClick={handleHit}
      >
      <div>Time left: {time}s</div>
      {health}
      <div className="h-4 w-52 bg-red-800">
        <div className="bg-green-800 h-full ease-in-out duration-200" style={{width: `${Math.round((health / maxHealth) * 100)}%`}}/>
      </div>
      <img src={minion} alt="Creature" className="h-20 w-20 mt-2" />
    </div>
  );
};

export default Minion;
