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
import Types from "./type/page";
import Work from "./work/page";
import Topic from "./topic/page";

export default function HeroSection() {
  return (
    <>
    <Section>
      <Container>
        {/* Left Side */}
        <LeftContent>
          <Badge>
            <Dot />
            Resources & Blog – Powered by Substack
          </Badge>

          <Heading>
            Our Knowledge <Highlight>Hub</Highlight>
          </Heading>

          <Subtext>
            To deliver timely, AI-friendly content, Kubix has moved its blog to Substack. Our guides, reports and stories are easy to subscribe to and discover.
          </Subtext>
        </LeftContent>

        {/* Right Side */}
        <RightImage>
          <Image src="/blog.png" alt="Blog" width={500} height={400} priority />
        </RightImage>
      </Container>
    </Section>

    <Types />
    <Work />
    <Topic />
    </>
  );
}
