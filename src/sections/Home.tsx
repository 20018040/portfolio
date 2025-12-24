import Message from "../components/Message";
import TextType from "../components/Texttype";
import LogoLoop from "../components/LogoLoop";

interface HomeProps {
  techLogos: any[];
}

const Home = ({ techLogos }: HomeProps) => {
  return (
    <>
      <div style={{ marginTop: 120, marginLeft: 64 }}>
        <Message
          welcome="Hello, Thank you for stopping by my portfolio."
          size={36}
        />
        <Message welcome="My Name is Jeff Kim" size={60} />
        <TextType
          text={[
            "Front-end Developer",
            "Computer Science Graduate",
            "Android App Developer",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
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
          ariaLabel="Technology stack"
        />
      </div>
    </>
  );
};

export default Home;
