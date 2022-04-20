import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import DisplayCard from "./components/Display_card/displayCard";
import Episodes from "./components/Episodes/Episodes";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Quotes from "./components/Quotes/Quotes";

function App() {
  return (
    <>
      <div className="background-color"></div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/quotes' element={<Quotes />} />
          <Route exact path='/episodes/card/:id' element={<DisplayCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
