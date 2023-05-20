import { useState } from "react";
import "./assets/style.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TopHeader from "./components/Topheader";
import LoadingPage from "./components/LoadingPage";
function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return loading ? (
    <LoadingPage />
  ) : (
    <div className="App">
      <TopHeader />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
