import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Live from "./components/Live";
import Play from "./components/Play";
import Work from "./components/Work";
import Invest from "./components/Invest";

function App() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <Dashboard />
      <Routes>
        <Route path={"/live"} element={<Live />} />
        <Route path={"/play"} element={<Play />} />
        <Route path={"/work"} element={<Work />} />
        <Route path={"/invest"} element={<Invest />} />

        {/* <div>{cards}</div> */}
      </Routes>
    </main>
  );
}

export default App;
