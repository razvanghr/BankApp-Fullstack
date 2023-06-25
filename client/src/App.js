import Navabar from "./components/Navabar";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import OpenAccount from "./components/OpenAccount";
import Dashbord from "./components/Dashbord";
import Main from "./components/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/account" element={<Login />} />
          <Route path="/open-account" element={<OpenAccount />} />
          <Route path="/dashbord" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
