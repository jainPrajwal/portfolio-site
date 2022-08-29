import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Header from "../Header/Header";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Major Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, description, image, source, tags, title, visit }) => {
          return (
            <BlogCard key={id}>
              <div style={{ height: `200px`, borderTopRightRadius: `16px` }}>
                <Img
                  src={image}
                  style={{
                    borderTopRightRadius: `16px`,
                    borderTopLeftRadius: `16px`,
                  }}
                />
              </div>

              <TitleContent>
                <HeaderThree>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div style={{ marginTop: `auto` }}>
                <TitleContent style={{ padding: `1rem` }}>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, index) => {
                    return <Tag key={index}>{tag}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks target={`_blank`} href={visit}>
                  Live Link
                </ExternalLinks>
                <ExternalLinks target={`_blank`} href={source}>
                  Code
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        }
      )}
    </GridContainer>
  </Section>
);

export default Projects;
