import { Navbar } from "../../components/globals/Navbar";
import { Global_Herosection } from "../../components/globals/Global_Herosection";
import { Footer } from "../../components/globals/Footer";
import { ContactSlider } from "../Home/ContactSlider";
import { Main } from "./Main";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Global_Herosection title="Feel Free to Contact Us" width="700px" />
      <Main />
      <ContactSlider />
      <Footer />
    </div>
  );
};

export default ContactUs;
