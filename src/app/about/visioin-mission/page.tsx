"use client";

import React from "react";
import {
  Section,
  ContentBlock,
  TextContent,
  Title,
  Underline,
  Description,
  ImageWrapper,
  Image,
  Underlines,
} from "./vision-missionStyled";

export default function AboutSection() {
  return (
    <Section>
      {/* Our Story */}
        <Section>
        <Title style={{ textAlign: "center" }}>
            Our <Underlines>Story</Underlines>
        </Title>

        <ContentBlock>
            <ImageWrapper>
            <Image src="/story.png" alt="Our Story" />
            </ImageWrapper>

            <TextContent>
                <Underline align="right" />
            <Description>
                Kubix was born from a simple question: “What if every student could
                chart a career path that matches who they are?” We believe informed
                decisions lead to happier lives, and we’ve made it our mission to
                provide clear, personalised guidance.
            </Description>
            </TextContent>
        </ContentBlock>
        </Section>


    {/* Mission & Vision */}
    <Section>
    <Title style={{ textAlign: "center" }}>
        Mission & <Underlines>Vision</Underlines>
    </Title>

    <ContentBlock>
        <TextContent>
            <Underline align="left" />
        <Description>
            Our mission is to democratise career clarity for India’s youth –
            giving every student the tools to explore, discover and design a
            fulfilling future.
        </Description>
        </TextContent>

        <ImageWrapper>
        <Image src="/mission.png" alt="Mission & Vision" />
        </ImageWrapper>
    </ContentBlock>
    </Section>

    </Section>
  );
}
