import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/nav/Navigation.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
