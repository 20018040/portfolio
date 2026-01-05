import Home from "./sections/Home";
import Resume from "./sections/Resume";
import Aboutme from "./sections/Aboutme";
import Contact from "./sections/Contact";
function App() {
  return (
    <>
      <div id="home" className="h-screen">
        <Home />
      </div>
      <div id="aboutme" className="h-screen">
        <Aboutme />
      </div>
      <div id="resume" className="h-screen">
        <Resume />
      </div>
      <div id="contact" className="h-screen">
        <Contact />
      </div>
    </>
  );
}

export default App;
