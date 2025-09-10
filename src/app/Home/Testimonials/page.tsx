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
} from "./TestimonialsStyled";

const testimonials = [
  {
    text: "Kubix helped me discover the right career path and made college applications so much easier!",
    name: "Nachiket Mahajan",
    role: "Student",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    text: "As a parent, I felt reassured knowing my child’s data was safe and they were getting expert guidance.",
    name: "Pratik Patil",
    role: "Parent",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    text: "Kubix has been an incredible partner in aligning with NEP 2020 and helping our students explore careers.",
    name: "Siddhant Mohekar",
    role: "Teacher",
    img: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    text: "Kubix gave our university better visibility to motivated students and improved admissions outreach.",
    name: "Yash Nagarkar",
    role: "University Admin",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function Testimonials() {
  return (
    <Section>
     <Title>
    Our <Underline>Testimonials</Underline>
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
