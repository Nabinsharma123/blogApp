import React, { useState } from "react";
import './App.css';
import Nav from "./Nav"
import Banner from "./Banner"
import Posts from "./Posts"
import Login from "./Login";


function App() {
  const [isclick, setisclick] = useState(false)
  return (
    <div className="App">
      <Nav popup={() => {
        setisclick(true)
      }} />
      <Banner popup={() => {
        setisclick(true)
      }} />
      <Posts popup={() => {
        setisclick(true)
      }} />
      {
        isclick && <Login close={() => { setisclick(false) }} />
      }
    </div>
  );
}

export default App;
