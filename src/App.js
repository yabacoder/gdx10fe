// import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      {/* <p className="text-xl">Hello world!</p> */}
    </BrowserRouter>
  );
}

export default App;
