"use client";

import React from "react";
import {
  Section,
  Title,
  Underline,
  Description,
  ButtonGroup,
  Button,
} from "../../Home/ConnectSection/ConnectStyled";

export default function ConnectSection() {
  return (
    <Section>
      <Title>
        Partner with  <Underline>Kubix</Underline>
      </Title>
      <Description>
       Looking to collaborate, invest, or bring Kubix to your community? Let’s start a conversation.
      </Description>
      <ButtonGroup>
        <Button>
          Get In Touch
        </Button>
      </ButtonGroup>
    </Section>
  );
}
