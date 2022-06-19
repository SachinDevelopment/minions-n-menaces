import React, { useContext } from "react";
import { GameState } from "../../Context/GameState";

interface Props {
  name: string;
  baseCost: number;
  baseDamage: number;
  cost: number;
  setItemDamage: any;
  owned: number;
  setOwned: any;
  setCost: any;
  itemDamage: number;
  img: any;
}

const StoreItem = ({
  name,
  cost,
  itemDamage,
  setItemDamage,
  owned,
  baseCost,
  setOwned,
  setCost,
  baseDamage,
  img,
}: Props) => {
  const gameContext = useContext(GameState);
  const { money, setMoney, setDamage } = gameContext;

  const handleStorePurchase = () => {
    if (money - cost < 0) return;
    const additionalDamage = baseDamage * owned;
    setDamage((damage: number) => damage + additionalDamage);
    setItemDamage((itemDamage: number) => itemDamage + additionalDamage);
    setMoney((currMoney: number) => currMoney - cost);
    setCost((currCost: number) => Math.ceil(baseCost * Math.pow(1.07, owned)));
    setOwned((currOwned: number) => currOwned + 1);
  };

  return (
    <div className="bg-gray-800 rounded p-2 w-full text-white flex justify-between items-center">
      <img src={img} alt="thing" className="w-12 mr-3" />
      <div>
        <div>{name}</div>
        <div>Cost - {cost}</div>
        <div>Dmg - {itemDamage}</div>
        <div>Owned - {owned}</div>
      </div>
      <button
        className="bg-blue-500 rounded p-2 m-2 h-12"
        onClick={handleStorePurchase}
      >
        Buy
      </button>
    </div>
  );
};

export default StoreItem;
