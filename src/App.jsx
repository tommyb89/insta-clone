import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import { userData } from "./data/data";

const App = () => {
  return (
    <div className="App">
      <Header user={userData} />
      <Main />
    </div>
  );
};

export default App;
