import { Herosection } from "./Herosection";
import { ArtOfImpactingpage } from "./ArtOfImpactingpage";
import { BouquetPage } from "./BouquetPage";
import { Portfolio } from "./Portfolio";
import { Footer } from "../../components/globals/Footer";
import { UpcomingEvents } from "./UpcomingEvents";
import { BlogToRead } from "./BlogToRead";
import { ContactSlider } from "./ContactSlider";

export const Homepage = () => {
  return (
    <div>
      <Herosection />
      <ArtOfImpactingpage />
      <BouquetPage />
      <Portfolio />
      <UpcomingEvents />
      <BlogToRead />
      <ContactSlider />
      <Footer />
    </div>
  );
};
