import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CoworkingsPage from "./page/admin/CoworkingPage";
import CreateCoworkingPage from "./page/admin/CreateCoworkingPage";
import UpdateCoworkingPage from "./page/admin/UpdateCoworkingPage";
import LoginPage from "./page/publicFront/LoginPage";
import HomePage from "./page/publicFront/HomePage";
import CoworkingResultPage from "./page/publicFront/CoworkingResultPage";
import Dashboard from "./page/admin/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/coworkings" element={<CoworkingsPage />} />
        <Route path="/admin/coworkings/create" element={<CreateCoworkingPage />} />
        <Route path="/admin/coworkings/:id/update" element={<UpdateCoworkingPage />} />
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<CoworkingResultPage/>}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;