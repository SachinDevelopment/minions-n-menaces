import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Minion from "./Components/Minion";

function App() {
  const [level, setLevel] = useState(1);

  return (
    <div>
      <Header />
      <Body>
        <div>Level: {level}</div>
        <Minion level={level} setLevel={setLevel} />
      </Body>
    </div>
  );
}

export default App;
