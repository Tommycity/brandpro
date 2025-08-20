import React from "react";
import { Navbar } from "../../components/globals/Navbar";
import { Global_Herosection } from "../../components/globals/Global_Herosection";
import { Footer } from "../../components/globals/Footer";
import { BlogMain } from "./BlogMain";

export const Blogs = () => {
  return (
    <div>
      <Navbar />
      <Global_Herosection title="Something to read?" />
      <BlogMain />

      <Footer />
    </div>
  );
};
