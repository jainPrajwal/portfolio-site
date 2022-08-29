import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: jainprajwal123@gmail.com">
            jainprajwal123@gmail
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          Developing Front End. Pixel by Pixel.
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/jainPrajwal" target={`_blank`}>
            <AiFillGithub size={`3rem`} />
          </SocialIcons>
          <SocialIcons
            target={`_blank`}
            href="https://www.linkedin.com/in/prajwal-jain-b9a8a0179/"
          >
            <AiFillLinkedin size={`3rem`} />
          </SocialIcons>
          <SocialIcons
            target={`_blank`}
            href="https://twitter.com/_PrajwalJain"
          >
            <AiFillTwitterCircle size={`3rem`} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
