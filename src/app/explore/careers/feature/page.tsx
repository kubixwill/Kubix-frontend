"use client";

import Image from "next/image";
import {
  Section,
  Title,
  Underline,
  CardGrid,
  Card,
  CardTitle,
  CardText,
  CardIcon,
} from "../../../Styles/4CardsStyled";

export default function WhoWeAre() {
  const cardsData = [
        {
      icon: "/icons/filter.png",
      title: "Interactive Filtering",
      text: "Filter careers by stream, subject and cluster for tailored exploration.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#007A1E",
    },
    {
      icon: "/icons/job.png",
      title: "Career Cards",
      text: "Each card shows skills, salaries, competencies and recommended universities.",
      titleColor: "#121212",
      textColor: "#242424",
      bgColor: "#FFB600",
    },
    {
      icon: "/icons/suggest.png",
      title: "Related Suggestions",
      text: "Our algorithm suggests related careers based on your choices and quiz results.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#0F3359",
    },
    {
      icon: "/icons/mob.png",
      title: "App Integration",
      text: "Save careers to your dashboard and continue exploring on the mobile app.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#FF6600",
    },
  ];

  return (
    <Section>
      <Title>
        <Underline>Features</Underline>
      </Title>
      <CardGrid>
        {cardsData.map((card, index) => (
          <Card key={index} bgColor={card.bgColor}>
            <CardIcon>
              <Image src={card.icon} alt={card.title} width={48} height={48} />
            </CardIcon>
            <CardTitle color={card.titleColor}>{card.title}</CardTitle>
            <CardText color={card.textColor}>{card.text}</CardText>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
}
