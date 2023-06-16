import { useState } from 'react'
import Radio from "./Radio";
import "./app.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h1>APA Radio Player</h1>
        <h2>Pick a genre, choose a station, start listening</h2>
      </div>
      <Radio/>
    </>
  );
}

export default App;
