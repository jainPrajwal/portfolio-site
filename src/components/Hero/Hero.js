import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hii, <br />
        This is Prajwal..!
      </SectionTitle>
      <SectionText>
        I can help you build the front end of your Web App..!
      </SectionText>
      <Button
      onClick={() => {
        return window.location = `http://localhost:3000/#projects`
      }}
      >Proof of Work</Button>
    </LeftSection>
  </Section>
);

export default Hero;
