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
   How It  <Underline>Works</Underline>
    </Title>
      <Description>
        Subscribe: Enter your email to receive updates directly in your inbox.
        <br /><br />
        Read & Share: Our articles are free and shareable. Each post includes a concise summary with a link to the full Substack article.
      </Description>
      <ButtonGroup>
        <Button>Visit Substack Page</Button>
      </ButtonGroup>
    </Section>
  );
}
