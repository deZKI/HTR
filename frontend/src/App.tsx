import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BaseballCaps from "@/pages/BaseballCaps/BaseballCaps.tsx";
import Home from "@/pages/Home/Home.tsx";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baseball-caps" element={<BaseballCaps />} />
      </Routes>
    </Router>
  )
}

export default App