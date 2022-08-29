import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  PortfolioText,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href={`/`}>
        <a
          style={{
            display: `flex`,
            alignItems: `center`,
            color: `white`,
          }}
        >
          <DiCssdeck size={`3rem`} />

          <PortfolioText>Portfolio</PortfolioText>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={`#projects`}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={`#skills`}>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href={`#about`}>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/jainPrajwal" target={`_blank`}>
        <AiFillGithub size={`3rem`} />
      </SocialIcons>
      <SocialIcons
        target={`_blank`}
        href="https://www.linkedin.com/in/prajwal-jain-b9a8a0179/"
      >
        <AiFillLinkedin size={`3rem`} />
      </SocialIcons>
      <SocialIcons target={`_blank`} href="https://twitter.com/_PrajwalJain">
        <AiFillTwitterCircle size={`3rem`} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
