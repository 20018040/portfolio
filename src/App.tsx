import Navbar from "./components/Navbar.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Message from "./components/Message.tsx";
import "./App.css";
// import Particles from './Particles';
import Background from "./components/Background.tsx";
import Particles from "./components/Particles.tsx";
function App() {
  let navBars = ["Home", "Education", "Projects", "Contact"];
  const homeMessage = "Hellso, Thank you for stopping by my portfolio.";
  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
    <div
      style={{
        paddingTop: 2,
        backgroundColor: "#ffffffff",
        color: "#9492eeff",
      }}
    >
      <div>
        <Navbar names={navBars}></Navbar>
        <div
          style={{
            marginTop: 120,
            marginLeft: 64,
          }}
        >
          <Message welcome={homeMessage} size={36} />
          <Message welcome="My Name is Jeff Kim" size={60}></Message>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
