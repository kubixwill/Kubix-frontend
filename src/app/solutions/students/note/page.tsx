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
        Ready to design your <Underline>own future?</Underline>
      </Title>
      <Description>
        Download the Kubix app now to start your journey and access personalised recommendations.
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
