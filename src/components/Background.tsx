import React from 'react'
import Particles from "./Particles.tsx";
const Background = () => {
 return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};



export default Background
