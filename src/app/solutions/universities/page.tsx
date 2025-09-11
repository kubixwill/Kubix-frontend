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
import DFeature from "./directory-features/page";
import UniList from "./uni-list/page";

export default function HeroSection() {
  return (
    <>
    <Section>
      <Container>
        {/* Left Side */}
        <LeftContent>
          <Badge>
            <Dot />
            Partnered with 100+ Universities
          </Badge>

          <Heading>
            For <Highlight>Universities</Highlight>
          </Heading>

          <Subtext>
        Kubix is a bridge between your programs and the most motivated students. Our university directory offers searchable profiles for institutions across India and abroad.
        </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/university.png" alt="Universities" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>

    <DFeature />
    <UniList />
    </>
  );
}
