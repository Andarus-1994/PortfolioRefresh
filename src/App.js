import "./assets/style.scss";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TopHeader from "./components/Topheader";
function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
