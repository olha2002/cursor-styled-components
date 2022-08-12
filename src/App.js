import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/Sign-In/Sign-In";
import { SignUp } from "./components/Sign-Up/Sign-Up";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
