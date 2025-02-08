// import './App.css';
import { useEffect, useState } from 'react';
import ApiProducts from './APiProducts/ApiProducts';

// function App() {
//   const [products,setProducts]=useState(1)
//   const [display, setDisplay] = useState({})
//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${products}`)
//       .then(response => response.json())
//       .then(data => setDisplay(data))
//   }, [products])
//   console.log('display',display)
//   return (
//     <div style={{ display: 'flex', height: '100vh', width: '100vw',overflow: 'visible' }}> 
//       <div style={{ width: '30%', height: '100vh', border: '1px solid black' }}>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 1</button>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 2</button>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 3</button>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 4</button>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 5</button>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 6</button>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 7</button>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 8</button>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 9</button>
//         <button onClick={()=>setProducts(prev=>prev+1)}>Product 10</button>
//       </div>
//       {/* <div style={{ width: '70%', height: '100vh', border: '1px solid black' }}></div> */}
//       <ApiProducts display={display} />
//     </div>
//   );
// }
// import { useEffect, useState } from 'react';
// import ApiProducts from './ApiProducts';

function App() {
  const [products, setProducts] = useState(1);
  const [display, setDisplay] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${products}`)
      .then(response => response.json())
      .then(data => setDisplay(data));
  }, [products]);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <div style={{ width: '30%', height: '100vh', border: '1px solid black',overflow: 'auto' }}>
        <h3 style={{textAlign:'center'}}>products</h3>
        {[...Array(20)].map((_,idx)=>(
          <button key={idx+1} onClick={()=>setProducts(idx+1)} style={{ display: 'flex', marginBottom: '5px', padding: '10px', margin:'auto'}}>Product {idx+1}</button>
        ))}
      </div>
      <ApiProducts display={display} />
    </div>
  );
}

export default App;


// export default App;