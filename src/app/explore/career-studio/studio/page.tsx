"use client";

import React from "react";
import {
  Section,
  Title,
  Underline,
  Description,
  ButtonGroup,
  Button,
} from "../../../Home/ConnectSection/ConnectStyled";

export default function ConnectSection() {
  return (
    <Section>
     <Title>
    Visit a Kubix <Underline>Studio Near You</Underline>
    </Title>
      <Description>
        Try our tools and speak to an expert counsellor, or explore franchise opportunities if you’d like to bring Kubix to your community.
      </Description>
      <ButtonGroup>
        <Button>Find a Studio</Button>
        <Button>Explore Franchise</Button>
      </ButtonGroup>
    </Section>
  );
}
