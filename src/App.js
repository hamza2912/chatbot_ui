import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Header from './components/header';
// import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <BrowserRouter>

    {/* <Header/> */}

    <Routes>
        <Route path="/" element={<Home />}></Route>
    </Routes>

    {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default App;
