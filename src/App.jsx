import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/parsial/Layout";
import Dashboard from "./components/UI/Dashboard/Dashboard";
import Tables from "./components/Pages/Tables";
import Billing from "./components/Pages/Billing.jsx";
import RTL from "./components/Pages/RTL.jsx";
import Profile from "./components/Pages/Profile.jsx";
import SignIn from "./components/Pages/SignIn.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tables" element={<Tables />} />
          <Route path="Billing" element={<Billing />} />
          <Route path="RTL" element={<RTL />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="SignIn" element={<SignIn />} />



          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
