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
            Aligned with NEP 2020 Guidelines
          </Badge>

          <Heading>
            For <Highlight>Schools</Highlight>
          </Heading>

          <Subtext>
            Kubix helps schools meet the career guidance requirements outlined in the National Education Policy 2020. Our platform provides structured pathways and supports student well‑being and career awareness.
          </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/school.png" alt="Schools" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>
  );
}
