import Navbar from "./components/Navbar.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Message from "./components/Message.tsx";
import "./App.css";
// import Particles from './Particles';
import Background from "./components/Background.tsx";
import Particles from "./components/Particles.tsx";
function App() {
  let navBars = ["Home", "Education", "Projects", "Contact"];
  const homeMessage = "Hello, Thank you for stopping by my portfolio.";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Particles background wrapped in a div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content on top */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: 20,
          backgroundColor: "transparent",
          color: "#9492eeff",
        }}
      >
        <Navbar names={navBars} />
        <div style={{ marginTop: 120, marginLeft: 64 }}>
          <Message welcome={homeMessage} size={36} />
          <Message welcome="My Name is Jeff Kim" size={60} />
        </div>
      </div>
    </div>
  );
}

export default App;
