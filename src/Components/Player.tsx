import React, { useContext} from 'react'
import { GameState } from "../Context/GameState";

const Player = () => {

    const gameContext = useContext(GameState);
    const { level, damage, money }  = gameContext;
  return (
    <div>
      <div>Level: {level}</div>
      <div>Damage: {damage}</div>
      <div>Money: {money}</div>
    </div>
  )
}

export default Player