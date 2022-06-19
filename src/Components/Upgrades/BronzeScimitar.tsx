import React, { useState } from "react";
import StoreItem from "./StoreItem";
import bronzedagger from "../../Assets/StoreItems/bronzedagger.png";

const baseCost = 5;
const baseDamage = 2;

const BronzeScimitar = () => {

  const [itemDamage, setItemDamage] = useState(baseDamage);
  const [cost, setCost] = useState(baseCost);
  const [owned, setOwned] = useState(0);

  return (
    <StoreItem
    img={bronzedagger}
      name="Bronze Scimitar"
      itemDamage={itemDamage}
      setItemDamage={setItemDamage}
      cost={cost}
      setCost={setCost}
      owned={owned}
      setOwned={setOwned}
      baseCost={baseCost}
      baseDamage={baseDamage}
    />
  );
};

export default BronzeScimitar;
