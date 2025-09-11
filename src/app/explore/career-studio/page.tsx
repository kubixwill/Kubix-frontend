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

export default function HeroSection() {
  return (
    <Section>
      <Container>
        {/* Left Side */}
        <LeftContent>
          <Badge>
            <Dot />
            Experience Guidance In Person
          </Badge>

          <Heading>
            Career <Highlight>Studios</Highlight>
          </Heading>

          <Subtext>
            Kubix Studios are interactive spaces designed to enhance your exploration journey. Find a nearby studio on our map, book appointments and immerse yourself in career discovery.
          </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/c-studio.png" alt="Career Studio" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>
  );
}
