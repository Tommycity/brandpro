import { Footer } from "../../components/globals/Footer";
import { Global_Herosection } from "../../components/globals/Global_Herosection";
import { Navbar } from "../../components/globals/Navbar";
import { PortfolioContent } from "./PortfolioContent";

export const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Global_Herosection title="Outshine the Competition" width="1000px" />
      <PortfolioContent />
      <Footer />
    </div>
  );
};
