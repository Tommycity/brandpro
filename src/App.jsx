import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../public/styles/globals.css";
import { Homepage } from "./pages/Home/Homepage";
import { About_Us_page } from "./pages/About-us/About_Us_page";
import { ServicesPage } from "./pages/Service/ServicesPage";
import { Portfolio } from "./pages/Portfolio/PortfolioPage";
import { Blogs } from "./pages/Blogs/Blogs";
import { Career } from "./pages/Careers/Career";
import ContactUs from "./pages/contact-us/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About_Us_page />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
