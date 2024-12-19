import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textformat from "./components/Textformat";
import AlertMe from "./components/AlertMe";
import AboutMe from "./components/AboutMe";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "white";
      showalert("success", "Dark mode Enabled");
      document.title = "TextUtils-Darkmode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("success", "Light mode Enabled");
      document.title = "TextUtils-Lightmode";
    }
  };

  const [alert, setalert] = useState(null);

  const showalert = (type, message) => {
    setalert({ msg: message, type: type });
    setTimeout(() => setalert(null), 1500);
  };

  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        togglemode={toggleMode}
      />
      <AlertMe alert={alert} />
      <div className="my-3 container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Textformat
                heading="📃 TextUtils 🖇️"
                mode={mode}
                showAlert={showalert}
              />
            }
          />
          <Route exact path="/about" element={<AboutMe mode={mode} />} />
          {/* Redirect all unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
