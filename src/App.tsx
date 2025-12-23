import Navbar from "./components/Navbar.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Message from "./components/Message.tsx";
import "./App.css";
import Particles from "./components/Particles.tsx";
import TextType from "./components/Texttype.tsx";
import LogoLoop from "./components/Logoloop.tsx";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];
function App() {
  let navBars = ["Home", "Education", "Projects", "Contact"];
  const homeMessage = "Hello, Thank you for stopping by my portfolio.";
  const nameMessage = "My Name is Jeff Kim";

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
          color: "#ffffffff",
        }}
      >
        <Navbar names={navBars} />
        <div style={{ marginTop: 120, marginLeft: 64 }}>
          <Message welcome={homeMessage} size={36} />
          <Message welcome={nameMessage} size={60} />
          <TextType
            text={[
              "Front-end Developer",
              "Computer Science Graduate",
              "Android App Developer",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div
          style={{
            height: "200px",
            position: "relative",
            overflow: "hidden",
            paddingTop: 100,
          }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />

          {/* Vertical loop with deceleration on hover */}
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="up"
            logoHeight={48}
            gap={40}
            hoverSpeed={20}
            fadeOut
          />
        </div>
      </div>
    </div>
  );
}

export default App;
