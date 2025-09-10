"use client";
import React from "react";
import {
  Section,
  Title,
  Underline,
  Description,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
  LogoSection,
  LogoBar,
  LogoItem
} from "./TrustedStyled";

const stats = [
  { number: "50k+", label: "Students Guided" },
  { number: "500+", label: "Partner Schools" },
  { number: "100+", label: "Universities Onboarded" }
];

const logos = [
  "https://logo.clearbit.com/logo.com",
  "https://logo.clearbit.com/logo.com",
  "https://logo.clearbit.com/logo.com",
  "https://logo.clearbit.com/logo.com",
  "https://logo.clearbit.com/logo.com",
  "https://logo.clearbit.com/logo.com",
  "https://logo.clearbit.com/logo.com",
  "https://logo.clearbit.com/logo.com",
];

export default function TrustedSection() {
  return (
    <>
    <Section>
     <Title>
    Trusted by <Underline>Thousands</Underline>
    </Title>
      <Description>
        We’ve helped thousands of students gain clarity and confidence. Kubix
        partners with top schools and universities and is compliant with the
        National Education Policy 2020.
      </Description>

      <StatsContainer>
        {stats.map((item, index) => (
          <StatItem key={index}>
            <StatNumber>{item.number}</StatNumber>
            <StatLabel>{item.label}</StatLabel>
          </StatItem>
        ))}
      </StatsContainer>
    </Section>
    <LogoSection>
      <LogoBar>
        {logos.map((logo, index) => (
          <LogoItem key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </LogoItem>
        ))}
      </LogoBar>
      </LogoSection>
    </>
  );
}
