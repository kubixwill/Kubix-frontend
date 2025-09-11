"use client";

import React from "react";
import { FiDownload } from "react-icons/fi"; 
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
        Join the Kubix  <Underline>Community Today</Underline>
      </Title>
      <Description>
        Empower your child to make informed decisions – download the Kubix app now.
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
          <FiDownload style={{ fontSize: "20px" }} />
          Download the App
        </Button>
      </ButtonGroup>
    </Section>
  );
}
