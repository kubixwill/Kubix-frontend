"use client";

import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
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
        University <Underline>Onboarding</Underline>
      </Title>
      <Description>
       Are you ready to connect with future applicants? Fill out the “List Your University” form to join our platform and reach a qualified audience.
      </Description>
      <ButtonGroup>
        <Button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 20px",
          }}
        >
          <RiGraduationCapFill style={{ fontSize: "20px" }} />
          List Your University
        </Button>
      </ButtonGroup>
    </Section>
  );
}
