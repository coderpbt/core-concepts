
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const test = ['yeasin','arafat'];

  //way 1
  const produs = [
    {name:'photoshop', price:'$60.99'},
  ]

  const produs2 = [
    {name:'Alu', price:'$60.99'},
  ]

  const produs3 = [
    {name:'Muri', price:'$60.99'},
  ]

  const nayoks = ['yeasin', 'arafat','kobir','amir','hasan','anup']; 

  return (
    <div className="App">
      <header className="App-header">
        <div className="front-reaxct">
        <ul>
          {
            nayoks.map(nice => <li>{nice}</li>)
          }
          {
            produs3.map(pro => <li>{pro.name}{pro.price}</li>)
          }

        </ul>


        <Parson name={test[0]} roll="800" age="20" job="web"></Parson>
        <Parson name={test[1]} roll="800" age="20" job="web"></Parson>
      </div>  

      <div className="product-con">
        <Product name={produs[0].name} price={produs[0].price}></Product>
        <Product2 product2={produs2[0]}></Product2>
        <Product3 product3={produs2[0]}></Product3>

        <Count></Count>
        <Users></Users>
      </div>
      </header>

    </div>
  );
}
function Users(){
  const [user, setUser] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUser(data))
  },[])
  return (
    <div>
      <h1>Dynamic User:{user.length}</h1>
      <ul>
        {
          user.map(useMe =><li>{useMe.name}</li>)
        }
      </ul>
      <ul>
        {
            user.map(useMe =><li>{useMe.email}</li>)
        }
      </ul>
      <ul>
        {
            user.map(useMe =><li>{useMe.username}</li>)
        }
      </ul>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(0);
  const justTake = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const justDesc = () => setCount(count - 1);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onMouseMove={justDesc}>Click Me</button>
      <button onClick={justTake}>Click Me</button>
    </div>
  )
}


function Parson(props){
  const sty = {
    margin: '5px',
    border: '5px solid #ddd',
    padding: '15px',
    color: '#fff'
  }
  return (
    <div style={sty} className="react-practice">
      <h1>Name:{props.name}</h1>
      <h2>Roll:{props.roll}</h2>
      <h3>Age:{props.age}</h3>
      <h4>job:{props.job}</h4>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border : '1px solid red',
    width : '200px',
    height : '200px',
    backgroung : 'pink',
    color : 'white',
    float : 'left'
  }
  return (
    <div style={productStyle}>
      <h4>{props.name}</h4>
      <h3>{props.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Product2(props){
  const productStyle2 = {
    border : '1px solid red',
    width : '200px',
    height : '200px',
    backgroung : 'pink',
    color : 'white',
    float : 'left'
  }
  return (
    <div style={productStyle2}>
      <h4>{props.product2.name}</h4>
      <h3>{props.product2.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Product3(props){
  const productStyle3 = {
    border : '1px solid red',
    width : '200px',
    height : '200px',
    backgroung : 'pink',
    color : 'white',
    float : 'left'
  }
  const {name, price} = props.product3
  return (
    <div style={productStyle3}>
      <h4>{name}</h4>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
