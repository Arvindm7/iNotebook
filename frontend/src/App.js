import "./App.css";
import {React} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Sidebar from "./components/Sidebar";



function App() {
  

  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
