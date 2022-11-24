import React from "react";
import {
  AiFillCode,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import { Author, FooterStyled, Social, Socials } from "./Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <Socials>
        <Social href={"https://github.com/ezgiEH"} target="_blank">
          <AiFillGithub />
        </Social>
        <Social
          href={"https://www.linkedin.com/in/ezgihocaoglu/"}
          target="_blank"
        >
          <AiFillLinkedin />
        </Social>
        <Social
          href={
            "https://github.com/ezgiEH?tab=repositories"
          }
          target="_blank"
        >
          <AiFillCode />
        </Social>
      </Socials>
      <Author>Ezgi Hocaoğlu</Author>
    </FooterStyled>
  );
}

export default Footer;