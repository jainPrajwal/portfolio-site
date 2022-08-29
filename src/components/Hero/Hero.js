import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding style={{ maxWidth: `100%` }}>
    <LeftSection>
      <SectionTitle main center>
        <div style={{ marginBlock: `2rem` }}> Hii,</div> 
        <div style={{ marginBlock: `2rem` }}>This is Prajwal..!</div>
      </SectionTitle>
      <SectionText>
        I can help you build the front end of your Web App..!
      </SectionText>
      <Button
        onClick={() => {
          return (window.location = `https://jainprajwal.netlify.app/#projects`);
        }}
      >
        Proof of Work
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
