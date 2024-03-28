import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Signup" exact element={<Signup />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutUs" exact element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
