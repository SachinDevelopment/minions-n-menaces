import React from "react";
import BronzeDagger from "./BronzeDagger";
import BronzeScimitar from "./BronzeScimitar";

const Store = () => {

  return (
    <div className="flex flex-col justify-between items-center space-y-1">
      <BronzeDagger/>
      <BronzeScimitar/>
    </div>
  );
};

export default Store;
