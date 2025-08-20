import { Footer } from "../../components/globals/Footer";
import { Global_Herosection } from "../../components/globals/Global_Herosection";
import { Navbar } from "../../components/globals/Navbar";
import { ContactSlider } from "../Home/ContactSlider";
import { InvestingPage } from "./InvestingPage";
import { Management_ReviewPage } from "./Management_ReviewPage";
import { Production_housePage } from "./Production_housePage";
import { RecentTeamActivities } from "./RecentTeamActivities";
import { TeamPage } from "./TeamPage";
import { UnwaveringCommitmentPage } from "./UnwaveringCommitmentPage";
import { Vision_Mission_Page } from "./Vision_Mission_Page";

export const About_Us_page = () => {
  return (
    <div>
      <Navbar />
      <Global_Herosection
        title="We Know the Middle
East Better"
        width="100%"
      />
      <UnwaveringCommitmentPage />
      <Management_ReviewPage />
      <Vision_Mission_Page />
      <Production_housePage />
      <InvestingPage />
      <TeamPage />
      <RecentTeamActivities />
      <ContactSlider />
      <Footer />
    </div>
  );
};
