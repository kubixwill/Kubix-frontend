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
            <img src="/Flogo.svg" alt="Kubix Logo" />
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
            <FooterLink>
              <Link href="/solutions">Solutions</Link>
            </FooterLink>
            <FooterLink>
              <Link href="/explore">Explore</Link>
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
