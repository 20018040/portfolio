import Navbar from "./components/Navbar.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Message from "./components/Message.tsx";
import "./App.css";
function App() {
  let navBars = ["Home", "Education", "Projects", "Contact"];
  const homeMessage = "Hello, Thank you for stopping by.";
  return (
    <div>
      <Navbar names={navBars}></Navbar>
      <Message welcome={homeMessage}></Message>
    </div>
  );
}

export default App;
