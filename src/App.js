import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      {/* <LoadTodos></LoadTodos> */}
    </div>
  );
}
// const newStyle = { color: "red", backgroundColor: "aqua", padding: "20px" }
function Mobile() {
  const [power, setPower] = useState(100)
  return (
    <div>
      <h2>{power}%</h2>
      <button onClick={() => setPower((power >= 10) ? power - 10 : power)}>Battery Down</button>
      <button style={{ marginLeft: "10px" }} onClick={() => setPower((power <= 90) ? power + 10 : power)}>Battery Up</button>
    </div>
  )
}


export default App;
