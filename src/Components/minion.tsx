import React, {useState, useEffect, useContext} from 'react'
import creature1 from '../Assets/creatures/creature1.gif'
import creature2 from '../Assets/creatures/creature2.gif'
import creature3 from '../Assets/creatures/creature3.gif'
import creature4 from '../Assets/creatures/creature4.gif'
import creature5 from '../Assets/creatures/creature5.gif'

import { GameState } from "../Context/GameState";

const creatures = [creature1, creature2, creature3, creature4, creature5]

const getRandomCreature = () => creatures[Math.floor(Math.random() * creatures.length + 1) - 1];

interface Minion {
  health: number,
}


const Minion = () => {
  const [health, setHealth] = useState(10)
  const [minion, setMinion] = useState(getRandomCreature())
  const gameContext = useContext(GameState);
  const { level, setLevel, damage, setMoney }  = gameContext;

  const handleDamage = () => {
    if (health - damage <= 0) {
      setLevel((level : number) => level + 1)
      setHealth(level * 10)
      // TODO: not this
      setMoney((money: number) => money + level * 3)
      setMinion(getRandomCreature())
    } else {
      setHealth((health) => health - damage);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => 
      handleDamage()
    , 1000);
    return () => clearInterval(intervalId);
  }, [handleDamage]);
  
  const handleHit = () => {
    handleDamage();
  }

  return (
    <div className='border-2 border-black p-10 bg-slate-800 w-52 flex flex-col justify-center items-center rounded active:bg-slate-700 select-none' onClick={handleHit}>
      <div className="text-center text-white">
      <div>Health: {health}</div>
      </div>
      <img src={minion} alt="Creature" className='h-20 w-20'/>
    </div>
    )
}

export default Minion