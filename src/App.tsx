import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header";
import Body from "./Components/Body";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Body>
        <div>Hello</div>
      </Body>
    </div>
  );
}

export default App;
