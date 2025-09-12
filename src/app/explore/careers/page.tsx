"use client";

import Image from "next/image";
import {
  Section,
  Container,
  LeftContent,
  Badge,
  Dot,
  Heading,
  Highlight,
  Subtext,
  RightImage,
} from "../../Styles/HeroStyled";
import Feature from "./feature/page";
import Path from "./path/page";

export default function HeroSection() {
  return (
    <>
    <Section>
      <Container>
        {/* Left Side */}
        <LeftContent>
          <Badge>
            <Dot />
            Explore 500+ Career Options
          </Badge>

          <Heading>
            Explore  <Highlight>Careers</Highlight>
          </Heading>

          <Subtext>
            Our career discovery engine lets you filter options by stream, subject and cluster. View detailed cards for each career including required skills, salary ranges, growth outlook, related courses and colleges.
          </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/explore-c.png" alt="Explore Career" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>

    <Feature />
    <Path />
    </>
  );
}
