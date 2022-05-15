import { useState } from "react";
import "./App.css";
import { fixUrl } from "./utils";
import { Link, Route, Routes } from "react-router-dom";
import Startsida from "./components/Startsida";
import Tävla from "./components/Tävla";
import Galleri from "./components/Galleri";

function App() {
  return (
    <div className="app">
      <header>
        <h2>My fullstack Project</h2>
        <nav>
          <Link to="/"> Startsida </Link>
          <Link to="/Tävla"> Hamsters som Tävlar </Link>
          <Link to="/HamstresGalleri"> Hamstres Galleri </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Startsida />} />
          <Route path="/Tävla" element={<Tävla />} />
          <Route path="/HamstresGalleri" element={<Galleri />} />
          <Route path="/*" element={<FourOhFour />} />
        </Routes>
      </main>
    </div>
  );
}
function FourOhFour() {
  return <p> 404 not found!! </p>;
}

export default App;
