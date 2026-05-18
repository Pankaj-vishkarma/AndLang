import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import OpenSource from "../pages/OpenSources";
import NonProfit from "../pages/NonProfit";
import Careers from "../pages/Careers";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/open-source" element={<OpenSource />} />
                    <Route path="/non-profit" element={<NonProfit />} />
                    <Route path="/careers" element={<Careers />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
};

export default AppRoutes;