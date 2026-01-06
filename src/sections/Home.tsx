import Navbar from "../components/Navbar.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Message from "../components/Message.tsx";
import "../App.css";
import Particles from "../components/Particles.tsx";
import TextType from "../components/Texttype.tsx";
import LogoLoop from "../components/LogoLoop.tsx";
import ProfileCard from "../components/ProfileCard.tsx";
import MePic from "../components/profilepic.jpg";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiKotlin,
  SiAndroid,
  SiPython,
  SiHtml5,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <FaJava />, title: "Java", href: "https://www.oracle.com/java/" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org/" },
  {
    node: <SiAndroid />,
    title: "Android",
    href: "https://developer.android.com",
  },
  {
    node: <SiHtml5 />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  {
    node: <SiFirebase />,
    title: "Firebase",
    href: "https://firebase.google.com",
  },
];

const Home = () => {
  // const navBars = ["Home", "About Me", "Projects", "Contact"];
  const navBars = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "aboutme" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];
  const homeMessage = "Hello, Thank you for stopping by my portfolio.\n";
  const nameMessage = "I'm Jeff Kim";

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Particles in the background */}
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

      {/* Main content */}
      <Navbar names={navBars} />
      <div
        style={{
          zIndex: 1,
          padding: 20,
          color: "#ffffffff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: 60,
            marginLeft: 64,
            width: "65vw",
            height: "70vh",
            flexDirection: "column",
            whiteSpace: "pre-line",
          }}
        >
          <Message welcome={homeMessage} size={32} />
          <Message welcome={nameMessage} size={100} />
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
            width: "25%",
            height: "70vh",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            transform: "scale(1.2)",
            paddingTop: "50px",
          }}
        >
          <ProfileCard
            name="Jeff Kim"
            title="Software Engineer"
            handle="d"
            status="Online"
            contactText="Contact Me"
            avatarUrl={MePic}
            showUserInfo={false}
            enableTilt={false}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            behindGlowEnabled={false}
            behindGlowColor="rgba(0,0,0,0)"
          />
        </div>
      </div>

      {/* LogoLoop at the bottom */}
      <div
        style={{
          height: "100px",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={20}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};

export default Home;
