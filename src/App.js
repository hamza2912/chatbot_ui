import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import './App.css';

function App() {
  return (

    <Routes>
        <Route path="/" element={<Home />}></Route>
    </Routes>

  );
}

export default App;
