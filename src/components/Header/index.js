import React, { Component } from "react";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
import { MdAddLocation } from "react-icons/md";
import styled from "styled-components";
const jwtToken = localStorage.getItem("jwtToken");

const NavBar = styled.nav`
  background-color: #ffffff;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 998px) {
    justify-content: center;
  }
`;

const WebNameAndLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2%;
`;

const WebLogo = styled.img`
  width: 48px;
  height: 48px;
`;

const WebsiteName = styled.p`
  font-family: "Playfair Display";
  font-size: 32px;
  margin-left: 5px;
`;

const NavItemsContainer = styled.ul`
  padding-left: 0px;
  margin-right: 2%;
  display: flex;
  justify-content: space-between;
  width: 680px;
  height: 25px;
  @media screen and (max-width: 998px) {
    display: none;
  }
`;

const NavItem = styled.li`
  list-style-type: none;
  font-size: 16px;
  font-family: ;
  color: #000000;
  font-weight: 400;
  display: flex;
  cursor: pointer;
  height: 26px;
  &:hover {
    background-color: #ebebeb;
  }
`;

const DropdownIcon = styled(IoIosArrowDown)`
  font-size: 23px;
  height: 26px;
  margin-bottom: 20px;
`;

const DropdownContainer = styled.ul`
  padding-left: 0px;
  background-color: #fff;
  width: 140px;
  height: 130px;
  margin-top: 43px;
  position: absolute;
  right: 27px;
  border-radius: 4px;
`;

const DropdownItem = styled.li`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #000000;
  font-size: 14px;
`;

const Buttons = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

class Header extends Component {
  state = { showDropdown: false };

  toggleDropdown = () => {
    this.setState((prevState) => ({ showDropdown: !prevState.showDropdown }));
  };

  render() {
    const { showDropdown } = this.state;
    return (
      <NavBar>
        <WebNameAndLogoContainer>
          <WebLogo
            src="https://templesofindia.org/assets/images/tofi_logo/tofi-logo_navbar.png"
            alt="tofi logo"
          />
          <WebsiteName>Temples of India</WebsiteName>
        </WebNameAndLogoContainer>
        <NavItemsContainer>
          <Link to="/">
            <NavItem>Home</NavItem>
          </Link>
          <NavItem>Search</NavItem>

          <NavItem>Nearby Temples</NavItem>
          <NavItem>
            {" "}
            <MdAddLocation color="#a50740" size={23} /> Add Temples
          </NavItem>
          <Link to="/about">
            <NavItem>About Us</NavItem>
          </Link>
          <NavItem onMouseEnter={this.toggleDropdown}>
            Login
            <DropdownIcon />
            {showDropdown && (
              <DropdownContainer
                onMouseEnter={this.toggleDropdown}
                onMouseLeave={this.toggleDropdown}
              >
                <Link to="/signup">
                  <DropdownItem>Signup</DropdownItem>
                </Link>
                <hr />

                <DropdownItem>
                  <Buttons
                    onClick={() =>
                      jwtToken ? (
                        <Link to="/" /> &&
                        alert(
                          "You Are Already LoggedIn.If you want to look out the page access it by adding /login/ at the end in url😊."
                        )
                      ) : (
                        <Link to="/login" />
                      )
                    }
                  >
                    Login
                  </Buttons>
                </DropdownItem>

                <hr />
                <Link to="/nearby">
                  <DropdownItem>Nearby Temples</DropdownItem>
                </Link>
              </DropdownContainer>
            )}
          </NavItem>
        </NavItemsContainer>
      </NavBar>
    );
  }
}

export default Header;
