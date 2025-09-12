"use client";

import React from "react";
import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 100px;
  text-align: center;
  background: #fff;

  @media (max-width: 1200px) {
    padding: 50px 80px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #121212;

  @media (max-width: 1200px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 25px;
  }
`;

export const Underline = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 5px;
    background: #FFB600;
  }
`;

const CardGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
`;

const Card = styled.div`
  background: #FFFCF5;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
  text-align: left;
  flex-grow: 1;
`;

const CardName = styled.h3`
  font-size: 1.1rem;
  color: #121212;
  font-weight: 700;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: #222;
  line-height: 1.4;
`;

export default function TeamAdvisors() {
  const teamData = [
    {
      name: "Sneha Modi",
      description:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.......",
      image: "1.jpg",
    },
    {
      name: "Sneha Modi",
      description:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.......",
      image: "2.jpg",
    },
    {
      name: "Sneha Modi",
      description:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.......",
      image: "3.jpg",
    },
    {
      name: "Sneha Modi",
      description:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.......",
      image: "4.jpg",
    },
  ];

  return (
    <Section>
     <Title>
         Teams & <Underline>Advisors</Underline>
         </Title>

      <CardGrid>
        {teamData.map((member, index) => (
          <Card key={index}>
            <CardImage src={member.image} alt={member.name} />
            <CardContent>
              <CardName>{member.name}</CardName>
              <CardText>{member.description}</CardText>
            </CardContent>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
}
