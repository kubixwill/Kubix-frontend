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
} from "../Styles/HeroStyled";

export default function HeroSection() {
  return (
    <Section>
      <Container>
        {/* Left Side */}
        <LeftContent>
          <Badge>
            <Dot />
            Empowering Students Since Day One
          </Badge>

          <Heading>
            About  <Highlight>Kubix</Highlight>
          </Heading>

          <Subtext>
            Our mission is to democratise career clarity for India’s youth – giving every student the tools to explore, discover and design a fulfilling future.
          </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/aboutsec.png" alt="About" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>
  );
}
