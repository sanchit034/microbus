
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Event from "./components/Event";
import Workshop from "./components/Workshop";
import Sponser from "./components/Sponser";
import "./styles/navbar.scss"
// import Slider from "./components/slider";
import TeamPage from "./components/TeamPage";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/teams' element={<TeamPage/>} />
          <Route path="/events" element={ <Event/> } />
          <Route path="/workshops" element={ <Workshop/> } />
          <Route path="/sponser" element={ <Sponser/> } />
        </Routes>

        <Footer/>
    </Router>
  );
}

export default App;
