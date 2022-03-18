import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <LoadTodos></LoadTodos>
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
function LoadTodos() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])
  return (
    <div>
      <h3>Total Tasks: {todos.length}</h3>
      {
        todos.map(todo =>
          < Todo
            key={todo.id}
            title={todo.title}
            completed={todo.completed} >
          </Todo>)
      }
    </div >
  )
}
function Todo(props) {
  // console.log(props)
  // const { title,completed } = props.todo
  // console.log(props.todo.completed)
  return (
    <div style={{ backgroundColor: "aqua", padding: "20px", margin: "10px" }}>
      <h3>Title: {props.title}</h3>
      <h5>Completed: {props.completed ? "true" : "false"}</h5>
    </div>
  )
}



export default App;
