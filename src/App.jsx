import "./App.scss";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { userData } from "./data/data.js";

function App() {
  return (
    <div className="App">
      <Header user={userData} />
      <Profile user={userData} />
    </div>
  );
}

export default App;
