import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ML from "./components/LegalDocuments/ML.jsx";
import CGU from "./components/LegalDocuments/CGU.jsx";
import CGV from "./components/LegalDocuments/CGV.jsx";
import PrivacyPolicy from "./components/LegalDocuments/PrivacyPolicy.jsx";
import "./styles/Reset.css";
import App from "./components/App/App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/ML" element={<ML />} />
                <Route path="/CGU" element={<CGU />} />
                <Route path="/CGV" element={<CGV />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
