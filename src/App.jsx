import Layout from "./pages/Layout";
import Resume from "./pages/Resume";
import { Routes, Route } from "react-router-dom"

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

