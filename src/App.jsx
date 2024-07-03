
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header/>
        <div id="home" style={{ height: '100vh',paddingTop:'20px'}}>
        <Home/>
        </div>
        <div id="about" style={{ height: '100vh',paddingTop:'200px' }}>
        <About/>
        </div>
        
        <div id="projects" style={{ height: '100vh',paddingTop:'20px' }}>
        <Projects/>
        </div>

        <div id="contact" style={{ height: '100vh',paddingTop:'100px' }}>
        <Contact/>
        </div>


        
        <Footer/>
      </div>
    </>
  );
}

export default App;
