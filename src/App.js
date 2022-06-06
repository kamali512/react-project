import { useState } from "react";
import HeaderText from "./components/Header/HeaderText";
import Navbar from "./components/Header/Navbar/Navbar";
import Section from "./components/Section/Section";
function App() {
  const [selected, setSelected] = useState("Blockchain Development");
  return (
    <div className="App">
     <Navbar/>
     <HeaderText style={{marginBottom:"30%"}}/>
     <Section style={{marginBottom:"30%"}}  selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default App;
