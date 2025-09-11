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
            Comprehensive Directory of Universities
          </Badge>

          <Heading>
            University <Highlight>Listings</Highlight>
          </Heading>

          <Subtext>
            Kubix provides a searchable database of universities with advanced filters. Each university page includes detailed information about programs, fees and admissions.
          </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/universities-listing.png" alt="University Listings" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>
  );
}
