import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <Loading />
      <Landing />
    </div>
  );
}

export default App;
