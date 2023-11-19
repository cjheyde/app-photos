import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/app-photos" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
