import "./App.css";
import HomePage from "./pages/HomePage";
import background from "./images/background.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <HomePage />
    </div>
  );
}

export default App;
