import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/nav/Navigation.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <Navigation />
      {/* <Switch> */}
      <Home />
      <About />
      <Portfolio />
      <Contact />
      {/* </Switch> */}
    </Router>
  );
}

export default App;
