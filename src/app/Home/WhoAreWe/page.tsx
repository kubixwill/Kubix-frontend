"use client";

import { FiArrowUpRight } from "react-icons/fi";
import {
  Section,
  Title,
  Underline,
  CardGrid,
  Card,
  CardTitle,
  CardText,
  LearnMoreButton,
} from "./WhoAreWeStyled";

export default function WhoWeAre() {
  const cardsData = [
    {
      title: "I’m a Student",
      text: "Find your strengths, explore careers and build your portfolio.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#007A1E", 
    },
    {
      title: "I’m a Parent",
      text: "Understand how Kubix supports your child and ensures data safety.",
      titleColor: "#121212",
      textColor: "#242424",
      bgColor: "#FFB600", 
    },
    {
      title: "I’m a School",
      text: "Comply with NEP 2020, run engaging workshops and empower students.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#0F3359", 
    },
    {
      title: "I’m a University",
      text: "Showcase your programs to motivated students and improve admissions.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#FF6600", 
    },
  ];

  return (
    <Section>
      <Title>
        Who Are <Underline>We?</Underline>
      </Title>
      <CardGrid>
        {cardsData.map((card, index) => (
          <Card key={index} bgColor={card.bgColor}>
            <div>
              <CardTitle color={card.titleColor}>{card.title}</CardTitle>
              <CardText color={card.textColor}>{card.text}</CardText>
            </div>
            <LearnMoreButton href="#">
              Learn More <FiArrowUpRight />
            </LearnMoreButton>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
}
