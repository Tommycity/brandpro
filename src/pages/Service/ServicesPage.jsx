import React from "react";
import { Navbar } from "../../components/globals/Navbar";
import { Global_Herosection } from "../../components/globals/Global_Herosection";
import { ExcelBeyondPage } from "./ExcelBeyondPage";
import { BrandEverywhere } from "./BrandEverywhere";
import { Facilities } from "./Facilities";
import { SliderPage } from "./SliderPage";
import { Footer } from "../../components/globals/Footer";

export const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <Global_Herosection
        title="We Turn Your Ideas Into Gorgeous Products"
        width="600px"
      />
      <ExcelBeyondPage />
      <BrandEverywhere />
      <Facilities />
      <SliderPage />
      <Footer />
    </div>
  );
};
