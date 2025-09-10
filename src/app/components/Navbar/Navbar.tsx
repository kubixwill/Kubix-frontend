"use client";

import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavItem,
  DropdownIcon,
  GetAppButton,
  Hamburger,
  MobileMenu,
  MobileNavItem,
  MobileDropdown,
  MobileDropdownItem,
} from "./NavbarStyles";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <NavbarContainer>
      {/* Logo */}
      <Logo>
        <img src="/Logo.svg" alt="Kubix Logo" />
      </Logo>

      {/* Desktop Navigation */}
      <NavLinks>
        <NavItem>Home</NavItem>
        <NavItem>Solutions</NavItem>
        <NavItem>Explore</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
      </NavLinks>

      {/* CTA Button */}
      <GetAppButton>Get the App</GetAppButton>

      {/* Hamburger Menu */}
      <Hamburger onClick={toggleMobileMenu}>
        {isMobileOpen ? <FiX size={28} color="Black" /> : <FiMenu size={28} color="Black" />}
      </Hamburger>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileOpen}>
        <MobileNavItem>Home</MobileNavItem>

        <MobileNavItem onClick={() => toggleDropdown("solutions")}>
          <span>Solutions</span>
          <DropdownIcon isOpen={openDropdown === "solutions"}>
            <FiChevronDown />
          </DropdownIcon>
        </MobileNavItem>
        {openDropdown === "solutions" && (
          <MobileDropdown>
            <MobileDropdownItem>For Students</MobileDropdownItem>
            <MobileDropdownItem>For Parents</MobileDropdownItem>
            <MobileDropdownItem>For Schools</MobileDropdownItem>
            <MobileDropdownItem>For Universities</MobileDropdownItem>
          </MobileDropdown>
        )}

        <MobileNavItem onClick={() => toggleDropdown("explore")}>
          <span>Explore</span>
          <DropdownIcon isOpen={openDropdown === "explore"}>
            <FiChevronDown />
          </DropdownIcon>
        </MobileNavItem>
        {openDropdown === "explore" && (
          <MobileDropdown>
            <MobileDropdownItem>Career Studio</MobileDropdownItem>
            <MobileDropdownItem>Explore Careers</MobileDropdownItem>
            <MobileDropdownItem>University Listings</MobileDropdownItem>
          </MobileDropdown>
        )}

        <MobileNavItem>About</MobileNavItem>
        <MobileNavItem>Blog</MobileNavItem>
        <MobileNavItem>Contact</MobileNavItem>

        <GetAppButton style={{ width: "100%", marginTop: "15px" }}>
          Get the App
        </GetAppButton>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
