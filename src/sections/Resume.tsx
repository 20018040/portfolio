import Message from "../components/Message";
import Experience from "../components/Experience";
const title = "Resume";
const Resume = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "25vw",
          flexDirection: "column",
          paddingLeft: "200px",
          whiteSpace: "pre-line",
        }}
      >
        <Message welcome={title} size={36} color={"#e9e9e9ff"} />
        <Experience></Experience>
      </div>
      <div
        style={{
          width: "100vh",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
          paddingLeft: "50px",
        }}
      >
        <iframe
          src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0#view=FitH"
          width="100%"
          height="600px"
          style={{ border: "none", overflow: "hidden" }}
        />
      </div>
    </div>
  );
};

export default Resume;
