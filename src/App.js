import {useState, useEffect} from 'react'
function App() {
  const [count, setCount]= useState(0)
  const [name, setName] = useState('')


useEffect(()=>{
  document.title = `you clicked ${count}`
})


  return (
    <div className="App">
      <p>you clicked the button {count} times !</p>
      <button onClick={()=>setCount(count +1)}>click</button>
      <label >enter a name</label>
      <input type="text" onChange={()=>setName('hamad')}/>
      <input type="submit" />
      <h3>hello {name}</h3>
      <br />
      <h1>hello react </h1>
    </div>
  );
}

export default App;
