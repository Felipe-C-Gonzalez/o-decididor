import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-slate-50">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historico" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
