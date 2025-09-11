"use client";

import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavItem,
  DropdownIcon,
  DropdownMenu,
  DropdownItem,
  GetAppButton,
  Hamburger,
  MobileMenu,
  MobileNavItem,
  MobileDropdown,
  MobileDropdownItem,
} from "./NavbarStyles";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
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
        <a href="/">
          <img src="/Logo.svg" alt="Kubix Logo" />
        </a>
      </Logo>

      {/* Desktop Navigation */}
      <NavLinks>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>

        {/* Solutions Dropdown */}
        <NavItem
          onMouseEnter={() => setOpenDropdown("solutions")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="#">
            Solutions <DropdownIcon isOpen={openDropdown === "solutions"}><FiChevronDown /></DropdownIcon>
          </a>
          {openDropdown === "solutions" && (
            <DropdownMenu>
              <DropdownItem><a href="/solutions/students">For Students</a></DropdownItem>
              <DropdownItem><a href="/solutions/parents">For Parents</a></DropdownItem>
              <DropdownItem><a href="/solutions/schools">For Schools</a></DropdownItem>
              <DropdownItem><a href="/solutions/universities">For Universities</a></DropdownItem>
            </DropdownMenu>
          )}
        </NavItem>

        {/* Explore Dropdown */}
        <NavItem
          onMouseEnter={() => setOpenDropdown("explore")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="#">
            Explore <DropdownIcon isOpen={openDropdown === "explore"}><FiChevronDown /></DropdownIcon>
          </a>
          {openDropdown === "explore" && (
            <DropdownMenu>
              <DropdownItem><a href="/explore/career-studio">Career Studio</a></DropdownItem>
              <DropdownItem><a href="/explore/careers">Explore Careers</a></DropdownItem>
              <DropdownItem><a href="/explore/universities-list">University Listings</a></DropdownItem>
            </DropdownMenu>
          )}
        </NavItem>

        <NavItem><a href="/about">About</a></NavItem>
        <NavItem><a href="/blog">Blog</a></NavItem>
        <NavItem><a href="/contact">Contact</a></NavItem>
      </NavLinks>

      {/* CTA Button */}
      <GetAppButton>Get the App</GetAppButton>

      {/* Hamburger Menu */}
      <Hamburger onClick={toggleMobileMenu}>
        {isMobileOpen ? <FiX size={28} color="Black" /> : <FiMenu size={28} color="Black" />}
      </Hamburger>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileOpen}>
        <MobileNavItem><a href="/">Home</a></MobileNavItem>

        <MobileNavItem onClick={() => toggleDropdown("solutions")}>
          <span>Solutions</span>
          <DropdownIcon isOpen={openDropdown === "solutions"}>
            <FiChevronDown />
          </DropdownIcon>
        </MobileNavItem>
        {openDropdown === "solutions" && (
          <MobileDropdown>
            <MobileDropdownItem><a href="/solutions/students">For Students</a></MobileDropdownItem>
            <MobileDropdownItem><a href="/solutions/parents">For Parents</a></MobileDropdownItem>
            <MobileDropdownItem><a href="/solutions/schools">For Schools</a></MobileDropdownItem>
            <MobileDropdownItem><a href="/solutions/universities">For Universities</a></MobileDropdownItem>
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
            <MobileDropdownItem><a href="/explore/career-studio">Career Studio</a></MobileDropdownItem>
            <MobileDropdownItem><a href="/explore/careers">Explore Careers</a></MobileDropdownItem>
            <MobileDropdownItem><a href="/explore/universities">University Listings</a></MobileDropdownItem>
          </MobileDropdown>
        )}

        <MobileNavItem><a href="/about">About</a></MobileNavItem>
        <MobileNavItem><a href="/blog">Blog</a></MobileNavItem>
        <MobileNavItem><a href="/contact">Contact</a></MobileNavItem>

        <GetAppButton style={{ width: "100%", marginTop: "15px" }}>
          Get the App
        </GetAppButton>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
