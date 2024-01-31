import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import SecondPage from "./Pages/SecondPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<SecondPage />} />
    </Routes>
  );
}

export default App;
