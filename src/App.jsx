import { useState } from "react";
import Navigation from "./comonents/Navigation";
import Home from "./comonents/Home";
import DishesCard from "./comonents/DishesCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <DishesCard />
      </Router>
    </>
  );
}

export default App;
