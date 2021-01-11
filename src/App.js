import logo from "./logo.svg";
// import NavBar from './Components/NavBar/NavBar'

import { NavBar } from "./Components/NavBar/NavBar";
import StudentsCard from "./Components/StudentCard/StudentCard";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <StudentsCard />
      <Footer/>
    </div>
  );
}

export default App;
