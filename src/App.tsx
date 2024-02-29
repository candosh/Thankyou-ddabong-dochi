import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default App;
