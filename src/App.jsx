import "./App.scss";
import Signup from "./components/Signup/Signup";
import Main from "./containers/Main/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Signup />} />
          {/* <Route path="/register" element={<SignUp />} /> */}
          {/* <Route exact path="/reset" element={<Reset />} /> */}
          <Route exact path="/dashboard" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
