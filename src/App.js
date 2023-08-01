import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CoworkingsPage from "./page/CoworkingPage";
import CreateCoworkingPage from "./page/CreateCoworkingPage";
import UpdateCoworkingPage from "./page/UpdateCoworkingPage";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/coworkings" element={<CoworkingsPage />} />
        <Route path="/admin/coworkings/create" element={<CreateCoworkingPage />} />
        <Route path="/admin/coworkings/:id/update" element={<UpdateCoworkingPage />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;