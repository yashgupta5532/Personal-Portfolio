import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/logo.png";
// import { faUserAlt } from "react-icons";

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#22243A"
      navColor1="white"
      navColor2="#22243A"
      logo={logo}
      logoHoverSize="25px"
      link1Text="Home"
      link2Text="Hire me"
      link3Text="About us"
      link4Text="Contact us"
      link1Url="/home"
      link2Url="/hire/me"
      link3Url="/aboutus"
      link4Url="contact"
      link1Size="1.3rem"
      link1Color="#DEB4B8"
      link1ColorHover="white"
      link1Margin="1vmax"
      link1Padding="1vmax"
      // ProfileIconElement={faUserAlt}
    />
  );
};

export default Header;
