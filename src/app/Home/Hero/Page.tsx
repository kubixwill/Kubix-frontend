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
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
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
            Trusted by 100+ Schools & Universities
          </Badge>

          <Heading>
            Unlock Your <br /> Future with <Highlight>Kubix</Highlight>
          </Heading>

          <Subtext>
            India’s most trusted career & college discovery platform.
          </Subtext>

          <ButtonGroup>
            <PrimaryButton>Explore Careers</PrimaryButton>
            <SecondaryButton>Join a Studio</SecondaryButton>
          </ButtonGroup>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/hero.png" alt="Hero" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>
  );
}
