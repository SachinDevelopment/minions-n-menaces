import React, { useState } from "react";
import StoreItem from "./StoreItem";
import bronzedagger from "../../Assets/StoreItems/bronzedagger.png";

const baseCost = 1;
const baseDamage = 1;

const BronzeDagger = () => {
  const [itemDamage, setItemDamage] = useState(baseDamage);
  const [cost, setCost] = useState(baseCost);
  const [owned, setOwned] = useState(0);

  return (
    <StoreItem
      img={bronzedagger}
      name="Bronze Dagger"
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

export default BronzeDagger;
