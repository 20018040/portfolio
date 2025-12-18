import Navbar from "./components/Navbar.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Message from "./components/Message.tsx";
import "./App.css";
function App() {
  let navBars = ["Home", "Education", "Projects", "Contact"];
  const homeMessage = "Hello, Thank you for stopping by my portfolio.";
  return (
    <div class="card text-bg-primary mb-3">
      <div>
        <Navbar names={navBars}></Navbar>
        <div
          style={{
            marginTop: 100,
            marginLeft: 64,
          }}
        >
          <Message welcome={homeMessage} size={36} />
          <Message welcome="My Name is Jeff Kim" size={60}></Message>
        </div>
      </div>
    </div>
  );
}

export default App;
