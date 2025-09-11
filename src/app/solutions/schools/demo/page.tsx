"use client";

import {
  Section,
  Title,
  Underline,
  CardGrid,
  Card,
  CardTitle,
  CardText,
  LearnMoreButton,
  ButtonIcon,
} from "./demoStyled";

import { FiArrowUpRight } from "react-icons/fi";

export default function WhoWeAre() {
  const cardsData = [
    {
      title: "Book a Live Demo",
      text: "Invite our team to showcase how Kubix integrates into your school and supports NEP 2020 compliance.",
      bg: "/assets/DemoCardBG.png",
      titleColor: "#121212",
      textColor: "#242424",
      buttonText: "Request Demo",
      buttonLink: "#",
    },
    {
      title: "Read Case Studies",
      text: "Explore stories from schools that improved student engagement and career readiness with Kubix.",
      bg: "/assets/CaseSCardBG.png",
      titleColor: "#121212",
      textColor: "#242424",
      buttonText: "View Case Studies",
      buttonLink: "#",
    },
  ];

  return (
    <Section>
     <Title>
    Demo & <Underline>Case Studies</Underline>
    </Title>
      <CardGrid>
        {cardsData.map((card, index) => (
          <Card key={index} bg={card.bg}>
            <div>
              <CardTitle color={card.titleColor}>{card.title}</CardTitle>
              <CardText color={card.textColor}>{card.text}</CardText>
            </div>
            <LearnMoreButton href={card.buttonLink}>
              {card.buttonText} <ButtonIcon>
                <FiArrowUpRight />
              </ButtonIcon>
            </LearnMoreButton>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
}
