import logo from './logo.svg';
import './App.css';

function App() {
  const parson = {
    name : "Yeasin Arafat",
    age  : 21,
    home : "Dinajpur"
  }
  const parson2 = {
    name : "Arafat",
    age  : 21,
    home : "Dinajpur"
  }
  const style = {
    background : "#fff",
    color : "red",
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 0.1 v <code>src/App.js</code> and save to reload.
        </p>
        <p>My First paragraph</p>
        <h2 style={style} >Demand: {parson.name+ " " +parson.age+ " " + parson.home}</h2>
        <h2 style={{backgroundColor:"pink",color:"#fff"}} >Demand: {parson2.name+ " " +parson2.age+ " " + parson2.home}</h2>
      </header>
    </div>
  );
}

export default App;
