import react , { useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(0)
  const increment = () =>{
    setcount(count +1) ; 
  }
  const decrement = ()=>{
    setcount(count -1 ) ; 
  }
  
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=> setcount(0)}>Reset</button>
      <p>Click the buttons to change the count.</p>
      <p>Current count is {count}.</p>
    </div>
  );
}

export default App;
