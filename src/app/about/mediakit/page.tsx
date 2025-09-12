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
    ButtonGroup,
    Button,

} from "../visioin-mission/vision-missionStyled";
import { FaBriefcase } from "react-icons/fa6";
import { FiBriefcase, FiDownload } from "react-icons/fi";

export default function AboutSection() {
  return (
    <Section>
      {/* Our Story */}
        <Section>
        <Title style={{ textAlign: "center" }}>
            Careers at  <Underlines>Kubix</Underlines>
        </Title>

        <ContentBlock>
            <TextContent>
                <Underline align="right" />
            <Description>
               Join us! We’re always looking for talented individuals who care about education, technology and social impact. Visit our careers page to see open positions.
            </Description>

             <ButtonGroup>
                <Button
                  style={{
                    display: "inline-flex",
                    alignItems: "start",
                    gap: "8px",
                    padding: "12px 20px",
                  }}
                >
                  <FiBriefcase style={{ fontSize: "20px", color:'White' }} />
                  View Careers
                </Button>
              </ButtonGroup>
            </TextContent>
            
            <ImageWrapper>
            <Image src="/c-kubix.png" alt="Career Kubix" />
            </ImageWrapper>
        </ContentBlock>
        </Section>

        {/* Media Kit */}
    <Section>
    <Title style={{ textAlign: "center" }}>
        Press &  <Underlines>Media Kit</Underlines>
    </Title>

    <ContentBlock>
          <ImageWrapper>
        <Image src="/mediakit.png" alt="Media Kit" />
        </ImageWrapper>
        <TextContent>
            <Underline align="left" />
        <Description>
            Download our press kit for logos, photos and brand guidelines. Journalists and partners can find everything they need to share our story.
        </Description>
        <ButtonGroup>
                <Button
                  style={{
                    display: "inline-flex",
                    alignItems: "start",
                    gap: "8px",
                    padding: "12px 20px",
                  }}
                >
                  <FiDownload style={{ fontSize: "20px", color:'White' }} />
                  View Careers
                </Button>
              </ButtonGroup>
        </TextContent>

      
    </ContentBlock>
    </Section>

    </Section>
  );
}
