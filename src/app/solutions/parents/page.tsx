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
            Trusted by 500+ Thousands of Parents
          </Badge>

          <Heading>
            For <Highlight>Parents</Highlight>
          </Heading>

          <Subtext>
            Parents want the best for their children. Kubix provides reliable, data‑backed guidance and prioritises safety. We explain our data privacy policies clearly and never share personal information without consent.
          </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/parent.png" alt="Parents" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>
  );
}
