import Message from "../components/Message";
import MePic from "../components/profilepic.jpg";

const Aboutme = () => {
  const title = "About Me\n\n";
  const firstMessage = `Hi, my name is Jeff Kim and I'm a graduate of CSULB with a B.S degree in Computer Science.\n\nI'm currently looking for a job in the tech field, such as SWE, front-end developer, IT support/operation.
\nCurrently, I'm learning more about front-end development like JavaScript, React, HTML, CSS.\n
My strengths include being open to learning new frameworks, languages, and APIs to reach and achieve goals.\n
Hobbies: body-building, table tennis, basketball, gaming.\n
You can always reach out to me on my LinkedIn, Email, or GitHub.`;
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "65vw",
          flexDirection: "column",
          paddingLeft: "200px",
          whiteSpace: "pre-line",
        }}
      >
        <div>
          <Message welcome={title} size={36} color={"#e9e9e9ff"} />
          <Message welcome={firstMessage} size={36} color={"#e9e9e9ff"} />
        </div>
      </div>
      <div
        style={{
          width: "25%",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
          paddingLeft: "50px",
        }}
      >
        <img src={MePic} alt="Profile"></img>
      </div>
    </div>
  );
};

export default Aboutme;
