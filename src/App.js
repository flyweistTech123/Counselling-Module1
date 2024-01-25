import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './Component/Login/Login';
import Home from "./Component/Home/Home";
import { Search } from "./Component/Search/Search";
import NewAssignment from "./Component/NewAssement/NewAssignment";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/newassignmentlead" element={<NewAssignment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
