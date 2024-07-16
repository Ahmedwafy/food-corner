// import General from "./components/General/General";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Branches from "./components/Branches/Branches";
import Contact from "./components/Contact/Contact";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/About" exact element={<About/>} />
        <Route path="/Branches" exact element={<Branches/>} />
        <Route path="/Contact" exact element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

