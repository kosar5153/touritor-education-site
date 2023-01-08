import React from "react";
import "./Footer.css";

import FooterLink from "./FooterLink";
import FooterSearch from "./FooterSearch";

const Footer = () => {
  return (
    <div className="">
      <FooterSearch />
      <FooterLink />
    </div>
  );
};

export default Footer;
