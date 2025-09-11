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
            We’d Love to Hear from You
          </Badge>

          <Heading>
            Contact <Highlight>Us</Highlight>
          </Heading>

          <Subtext>
            Have questions about Kubix, our services, or partnership opportunities? Our team is here to help. Reach out to us anytime.
          </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/contact.png" alt="Contact" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>
  );
}
