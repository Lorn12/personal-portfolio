import "./App.css";
import { NavBar } from "./components/NavBar.js";
import { Banner } from "./components/Banner.js";
import { Banner } from "./components/Skills.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
