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
   Discover Your <Underline>Path</Underline>
    </Title>
      <Description>
        Dive into your options and save your favourites. When you’re ready to personalise your journey, download the Kubix app for deeper insights and tailored recommendations.
      </Description>
      <ButtonGroup>
        <Button>Start Exploring</Button>
      </ButtonGroup>
    </Section>
  );
}
