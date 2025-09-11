"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import {
  Section,
  Title,
  Underline,
  CardContainer,
  Card,
  Stars,
  Text,
  Divider,
  Profile,
  Avatar,
  NameRole,
} from "../../../Home/Testimonials/TestimonialsStyled";

const testimonials = [
  {
    text: "Kubix gave our child the clarity to choose the right course and reduced our stress as parents.",
    name: "Amit Jain",
    role: "Parent",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    text: "As a parent, I felt reassured knowing my child’s data was safe and they were getting expert guidance.",
    name: "Pratik Patil",
    role: "Parent",
    img: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    text: "We trusted Kubix for guidance and our child got into their dream university.",
    name: "Kartikey Jain",
    role: "Parent",
    img: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    text: "Kubix gave our university better visibility to motivated students and improved admissions outreach.",
    name: "Pradeep Singh",
    role: "Parent",
    img: "https://randomuser.me/api/portraits/men/39.jpg",
  },
];

export default function Testimonials() {
  return (
    <Section>
     <Title>
    Parent  <Underline>Stories</Underline>
    </Title>
      <CardContainer>
        {testimonials.map((item, index) => (
          <Card key={index}>
            <Stars>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </Stars>
            <Text>{item.text}</Text>
            <Divider />
            <Profile>
              <Avatar src={item.img} alt={item.name} />
              <NameRole>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </NameRole>
            </Profile>
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
}
