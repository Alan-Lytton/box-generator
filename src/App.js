import './App.css';
import BoxForm from "./components/BoxForm";
import {useState} from "react";
import AddBox from "./components/AddBox";

function App() {
    const [colorArr, setColorArr] = useState([]);
  return (
    <div className="App">
      <BoxForm colorArr={colorArr} setColorArr={setColorArr}/>
        <span ><AddBox colorArr={colorArr}/></span>
    </div>
  );
}

export default App;
