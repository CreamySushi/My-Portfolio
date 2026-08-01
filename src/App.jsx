import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

