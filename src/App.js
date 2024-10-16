import "./App.css";
import Profil from "./components/Profil";
import Skills from "./components/Skills";
import Links from "./components/Links";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <header className="App-header">
          <Profil />
          <Skills />
          <Links />
          <Experiences />
          <Projects />
          <Footer />
        </header>
      </div>
    </ParallaxProvider>
  );
}

export default App;
