import { Routes } from "react-router-dom";
import "./App.css";
// import Nav from "./Components/Nav"
import Home from "./Components/Home";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className = "bg-gradient-to-r from-[#29323c] to-[#485563]">
      <Routes>
        <Route path = "/" element = {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
