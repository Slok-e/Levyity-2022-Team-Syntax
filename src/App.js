import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Live from "./components/Live";
import Play from "./components/Play";
import Work from "./components/Work";
import Invest from "./components/Invest";
import TopNav from "./components/TopNav";
import { Grid } from "@mui/material";
import Sidebar from "./components/SideNav";

function App() {
  return (
    <Grid container className="w-screen bg-slate-200" alignItems={"stretch"}>
      <TopNav />
      <Grid item sm={2} style={{ height: "100%" }}>
        <Sidebar />
      </Grid>
      <Grid item sm={10} my={2} style={{ height: "100%", padding: "1rem 1rem 1rem 0" }}>
        <Routes>
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/live"} element={<Live />} />
          <Route path={"/play"} element={<Play />} />
          <Route path={"/work"} element={<Work />} />
          <Route path={"/invest"} element={<Invest />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
