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
   Share Your Story or <Underline>Suggest a Topic</Underline>
    </Title>
      <Description>
        If you have a success story or a topic you’d like us to cover, reach out via our contact form. Join the Kubix community of learners and contributors.
      </Description>
      <ButtonGroup>
        <Button>Contact Us</Button>
      </ButtonGroup>
    </Section>
  );
}
