"use client";
import React from "react";
import {
  FooterContainer,
  FooterTop,
  FooterColumn,
  FooterTitle,
  FooterText,
  FooterLinks,
  FooterLink,
  DropdownMenu,
  DropdownItem,
  SubscribeBox,
  SubscribeInput,
  SubscribeButton,
  SocialIcons,
  SocialIcon,
  FooterBottom,
  Logo,
} from "./FooterStyles";

import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link"; 

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTop>
        {/* Logo + Tagline */}
        <FooterColumn>
           <Logo>
                  <a href="/">
                    <img src="/Flogo.svg" alt="Kubix Logo" />
                  </a>
                </Logo>
          <FooterText>
            Unlock Your Future with Kubix – India’s most trusted career & college
            discovery platform.
          </FooterText>
        </FooterColumn>

        {/* Quick Links */}
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link href="/">Home</Link>
            </FooterLink>
            <FooterLink>
              <Link href="/about">About</Link>
            </FooterLink>

            {/* Solutions with Dropdown */}
            <FooterLink>
              <span>Solutions</span> 
              <DropdownMenu>
                <DropdownItem>
                  <Link href="/solutions/students">For Students</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/solutions/parents">For Parents</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/solutions/schools">For Schools</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/solutions/universities">For Universities</Link>
                </DropdownItem>
              </DropdownMenu>
            </FooterLink>

            {/* Explore with Dropdown */}
            <FooterLink>
              <span>Explore</span> 
              <DropdownMenu>
                <DropdownItem>
                  <Link href="/explore/career-studio">Career Studio</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/explore/careers">Explore Careers</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/explore/universities-list">University Listings</Link>
                </DropdownItem>
              </DropdownMenu>
            </FooterLink>

            <FooterLink>
              <Link href="/blog">Blog</Link>
            </FooterLink>
            <FooterLink>
              <Link href="/contact">Contact</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>

        {/* Policies */}
        <FooterColumn>
          <FooterTitle>Policies</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </FooterLink>
            <FooterLink>
              <Link href="/terms">Terms & Conditions</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>

        {/* Newsletter */}
        <FooterColumn>
          <FooterTitle>Subscribe to Our Newsletter</FooterTitle>
          <FooterText>
            Stay updated with the latest news and updates about Kubix.
          </FooterText>
          <SubscribeBox>
            <SubscribeInput type="email" placeholder="Your email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscribeBox>

          {/* Social Icons */}
          <FooterTitle style={{ marginTop: "20px" }}>Follow Us</FooterTitle>
          <SocialIcons>
            <SocialIcon>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
      </FooterTop>

      {/* Bottom Section */}
      <FooterBottom>
        <p>© 2025 Kubix. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
