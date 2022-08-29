import React from "react";
import {
  DiFirebase,
  DiMongodb,
  DiReact,
  DiUikit,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { AiFillGithub } from "react-icons/ai";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>The range of skills I have in my cap..</SectionText>
    <List>
      <ListItem>
        <span style={{ marginBlock: `1rem` }}>
          <DiReact size={`3rem`} />
        </span>

        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Worked with <br /> React, Redux Toolkit, Typescript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span style={{ marginBlock: `1rem` }}>
          <DiUikit size={`3rem`} />
        </span>

        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Worked with <br /> Storybook, Chakra UI, Modular CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span style={{ marginBlock: `1rem` }}>
          <DiMongodb size={`3rem`} />
        </span>

        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Worked with <br /> Node, Express and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span style={{ marginBlock: `1rem` }}>
          <AiFillGithub size={`3rem`} />
        </span>

        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Worked with <br />
            Git, Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span style={{ marginBlock: `1rem` }}>
          <AiFillGithub size={`3rem`} />
        </span>

        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Worked with <br />
            VS Code Editor, Github Actions
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
