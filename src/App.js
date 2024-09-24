import { useState } from 'react';
import './App.css';
import Practice1 from './Practice1';

function App() {
  const [bgcolor, setbgcolor] = useState(true)
  const bg = () => {
    setbgcolor(!bgcolor)

  }

  return (
    <>
      <div className="App text-2xl" >
        <div className='border-2 border-black w-[300px] h-[300px]' style={{
          background: bgcolor ? "white" : "red",
          color:bgcolor ?"red":"white"
        }}>
          Sujeet Solanki
        </div>
        {/* <Practice1 name="sujeet" number="9460521812"  email="sujeetsolanki513@gmail.com" bg={bg}/> */}
      </div>
      <div>
        <Practice1 bg={bg} />

      </div>

    </>


  );
}

export default App;
