import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import OpenSource from "../pages/OpenSources";
import NonProfit from "../pages/NonProfit";
import Careers from "../pages/Careers";
import WebDesign from "../pages/WebDesign";
import GraphicDesign from "../pages/GraphicDesign";
import Programming from "../pages/Programming";
import HomeAutomation from "../pages/HomeAutomation";
import Blog from "../pages/Blogs";
import Contact from "../pages/Contacts";

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
                    <Route path="/services/web-design" element={<WebDesign />} />
                    <Route path="/services/graphic-design" element={<GraphicDesign />} />
                    <Route path="/services/programming" element={<Programming />} />
                    <Route path="/services/home-automation" element={<HomeAutomation />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
};

export default AppRoutes;