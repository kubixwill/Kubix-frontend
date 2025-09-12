"use client";

import React from "react";
import {
  Section,
  Left,
  MapContainer,
  InfoBlock,
  Icon,
  TextWrapper,
  Label,
  Text,
  Right,
  FormLabel,
  Input,
  TextArea,
  Button,
} from "../../Styles/contactformStyled";

// React Icons
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <Section>
      {/* Left: Map + Info */}
      <Left>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.207857331993!2d77.594562!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c0bafbc1%3A0x53f9275f8a64f0f2!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1694536620000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            ></iframe>
        </MapContainer>

        <InfoBlock>
          <Icon>
            <FaMapMarkerAlt />
          </Icon>
          <TextWrapper>
            <Label>Office</Label>
            <Text>Bangalore, Maharashtra, India</Text>
          </TextWrapper>
        </InfoBlock>

        <InfoBlock>
          <Icon>
            <FaEnvelope />
          </Icon>
          <TextWrapper>
            <Label>Email</Label>
            <Text>hello@kubix.com</Text>
          </TextWrapper>
        </InfoBlock>

        <InfoBlock>
          <Icon>
            <FaPhoneAlt />
          </Icon>
          <TextWrapper>
            <Label>Phone</Label>
            <Text>+91 98765 43210</Text>
          </TextWrapper>
        </InfoBlock>
      </Left>

      {/* Right: Form */}
      <Right>
        <FormLabel htmlFor="name">Full Name</FormLabel>
        <Input id="name" type="text" placeholder="Your full name *" />

        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" placeholder="Your Email *" />

        <FormLabel htmlFor="message">Message</FormLabel>
        <TextArea id="message" placeholder="Write a message!" />

        <Button>Send Message</Button>
      </Right>
    </Section>
  );
}
