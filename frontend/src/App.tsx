import {FC} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BaseballcapDetails from "@/pages/BaseballcapDetails/BaseballcapDetails.tsx";
import Baseballcaps from "@/pages/Baseballcaps/Baseballcaps.tsx";
import Home from "@/pages/Home/Home.tsx";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baseball-caps" element={<Baseballcaps />} />
        <Route path="/baseball-caps/:id" element={<BaseballcapDetails />} />
      </Routes>
    </Router>
  )
}

export default App