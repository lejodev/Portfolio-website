import "./App.css";
import Navigation from "./components/nav/Navigation.jsx";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      {/* <Switch> */}
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      {/* </Switch> */}
    </Router>
  );
}

export default App;
