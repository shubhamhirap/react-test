import { Route, Routes } from "react-router";
import "./App.css";
import CreateAdForm from "./components/createads/CreateAdForm";
import CreateAds from "./components/createads/CreateAds";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createads" element={<CreateAds />} />
        <Route path="/createads/:adType" element={<CreateAdForm />} />
      </Routes>
    </div>
  );
}

export default App;
