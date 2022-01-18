/** @format */

import "./App.css";
import MicroDrone from "./pages/MicroDrone";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MicroDrone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
