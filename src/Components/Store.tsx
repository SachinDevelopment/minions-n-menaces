import React, { useContext} from 'react'
import { GameState } from "../Context/GameState";



const Store = () => {
    const gameContext = useContext(GameState);
    const { setDamage, money, setMoney }  = gameContext;

    const handleStorePurchase = () => {
        if(money <= 0) return;
        setDamage((damage: number) => damage + 1)
        setMoney((money: number) => money - 1);

    }

  return (
    <button className="bg-blue-500 rounded p-2 m-2" onClick={handleStorePurchase}>Increase Damage</button>
  )
}

export default Store