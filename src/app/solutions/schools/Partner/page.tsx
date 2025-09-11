"use client";

import React from "react";
import { FaCalendar } from "react-icons/fa6";
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
        Become a Kubix  <Underline>Partner</Underline>
      </Title>
      <Description>
        Give your students access to structured career guidance. Click below to book a demo with our education outreach team.
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
          <FaCalendar style={{ fontSize: "20px" }} />
          Book a Demo
        </Button>
      </ButtonGroup>
    </Section>
  );
}
