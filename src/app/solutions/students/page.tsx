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
            Loved by 50,000+ Students Nationwide
          </Badge>

          <Heading>
            For <Highlight>Students</Highlight>
          </Heading>

          <Subtext>
            Welcome to your personalised career adventure! Kubix was built for students like you – curious, creative and ready to design your future.
        </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/student.png" alt="Student" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>
  );
}
