"use client";

import React from "react";
import {
  Section,
  Title,
  Underline,
  Description,
  ButtonGroup,
  Button,
} from "./ConnectStyled";

export default function ConnectSection() {
  return (
    <Section>
     <Title>
    Connect With <Underline>Universities</Underline>
    </Title>
      <Description>
        Students: explore universities that match your career goals and connect
        directly for counselling. Universities: join Kubix to increase your
        visibility among future applicants.
      </Description>
      <ButtonGroup>
        <Button>Explore Universities</Button>
        <Button>List Your University</Button>
      </ButtonGroup>
    </Section>
  );
}
