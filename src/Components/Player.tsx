import React, { useContext} from 'react'
import { GameState } from "../Context/GameState";

const Player = () => {

    const gameContext = useContext(GameState);
    const { level, damage, money, clickDamage }  = gameContext;
  return (
    <div className="bg-gray-800 text-white p-2 flex-1">
      <div>Level: {level}</div>
      <div>Damage: {damage}</div>
      <div>Money: {money}</div>
      <div>Click Damage: {clickDamage}</div>
    </div>
  )
}

export default Player