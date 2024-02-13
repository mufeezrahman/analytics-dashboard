import React,{useEffect} from "react";
import { ColorModeContext,useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./parts/global/topbar";
import Sidebar from "./parts/global/Sidebar";
import Dashboard from "./parts/dashboard";
import Team from "./parts/team";
import Invoices from "./parts/Invoices";
import Contacts from "./parts/contacts";
import Bar from "./parts/bar";
import Line from "./parts/line";
import Pie from "./parts/pie";
import Geography from "./parts/geography";
import { initGA, logPageView } from './analytics';
function App() {
  const [theme,colorMode]=useMode();
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log initial pageview
  }, []);
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
