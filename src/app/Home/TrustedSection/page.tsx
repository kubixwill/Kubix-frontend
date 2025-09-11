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
  LogoScroller,
  LogoSection,
  LogoTrack,
  LogoBar,
  LogoItem,
} from "./TrustedStyled";
import { Counter } from "./Counter"; // import the counter

const stats = [
  { number: 50, label: "Students Guided", suffix: "k+" },
  { number: 500, label: "Partner Schools" },
  { number: 100, label: "Universities Onboarded" },
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
              <StatNumber>
                <Counter
                  to={item.number}
                  duration={2}
                  format={(val) => {
                    // If suffix is defined, use it
                    if (item.suffix) return `${val}${item.suffix}`;
                    return val.toLocaleString();
                  }}
                />
              </StatNumber>
              <StatLabel>{item.label}</StatLabel>
            </StatItem>
          ))}
        </StatsContainer>
      </Section>

      <LogoSection>
        <LogoScroller>
          <LogoTrack>
            {/* repeat logos twice for seamless looping */}
            {logos.map((logo, index) => (
              <LogoItem key={`first-${index}`}>
                <img src={logo} alt={`Logo ${index + 1}`} />
              </LogoItem>
            ))}
            {logos.map((logo, index) => (
              <LogoItem key={`second-${index}`}>
                <img src={logo} alt={`Logo ${index + 1}`} />
              </LogoItem>
            ))}
          </LogoTrack>
        </LogoScroller>
      </LogoSection>


    </>
  );
}
