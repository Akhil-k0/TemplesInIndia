import styled from "styled-components";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterContainer = styled.div`
  background-color: #ffe240;
  height: 30vh;

  display: flex;
  justify-content: center;
  @media screen and (max-width: 990px) {
    height: 84vh;
  }
`;

const FooterLayout = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

const WebsiteInfoContainer = styled.div``;

const WebsiteNameLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`;

const SiteName = styled.p`
  color: #a4213c;
  font-size: 24px;
`;

const SiteLogo = styled.img`
  height: 35px;
  width: 35px;
  margin-left: 18px;
`;

const SiteDescription = styled.p`
  color: #a4213c;
  margin-top: 0px;
  font-size: 15px;
  font-weight: 400;
`;

const QuickLinksContainer = styled.ul`
  padding-left: 0px;
`;

const QuickLinkItem = styled.li`
  list-style-type: none;
  color: #a4213c;
  margin-top: 8px;
  cursor: pointer;
`;

const SocialIconsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  width: 160px;
  margin-top: 30px;
`;

const IconItem = styled.li`
  list-style-type: none;
  cursor: pointer;
`;

const Footer = () => (
  <FooterContainer>
    <FooterLayout>
      <WebsiteInfoContainer>
        <WebsiteNameLogoContainer>
          <SiteName>Temples of India</SiteName>
          <SiteLogo
            src="https://templesofindia.org/assets/images/tofi_logo/tofi-logo_navbar.png"
            alt="tofi logo"
          />
        </WebsiteNameLogoContainer>
        <SiteDescription>World's Largest Hindu Temples Portal.</SiteDescription>
      </WebsiteInfoContainer>

      <QuickLinksContainer>
        <QuickLinkItem>Quick Links</QuickLinkItem>
        <QuickLinkItem>Home</QuickLinkItem>
        <QuickLinkItem>About Us</QuickLinkItem>
        <QuickLinkItem>Nearby Temples</QuickLinkItem>
        <QuickLinkItem>Download App</QuickLinkItem>
      </QuickLinksContainer>

      <QuickLinksContainer>
        <QuickLinkItem>Search Temples</QuickLinkItem>
        <QuickLinkItem>Watch Video</QuickLinkItem>
        <QuickLinkItem>Disclaimer</QuickLinkItem>
        <QuickLinkItem>Our Blog</QuickLinkItem>
        <QuickLinkItem>Donate for Dharma</QuickLinkItem>
      </QuickLinksContainer>

      <SocialIconsContainer>
        <IconItem>
          <FaFacebookF size={28} color="#039be5" />
        </IconItem>
        <IconItem>
          <FaTwitter size={26} color="#039be5" />
        </IconItem>
        <IconItem>
          <FaInstagram size={26} color="#039be5" />
        </IconItem>
        <IconItem>
          <FaLinkedinIn size={26} color="#039be5" />
        </IconItem>
      </SocialIconsContainer>
    </FooterLayout>
  </FooterContainer>
);

export default Footer;
