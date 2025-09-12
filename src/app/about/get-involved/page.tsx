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
        Want to Get <Underline>Involved?</Underline>
      </Title>
      <Description>
        Contact us to learn more about partnerships, investment opportunities or job openings.
      </Description>
      <ButtonGroup>
        <Button>
          Contact Us
        </Button>
      </ButtonGroup>
    </Section>
  );
}
