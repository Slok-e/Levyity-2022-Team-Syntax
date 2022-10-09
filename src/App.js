import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Live from "./components/Live";
import Play from "./components/Play";
import Work from "./components/Work";
import Invest from "./components/Invest";
import TopNav from "./components/TopNav";

function App() {
  return (
    <main className="w-screen bg-slate-200">
      {/* <Navbar /> */}
      <TopNav />
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
