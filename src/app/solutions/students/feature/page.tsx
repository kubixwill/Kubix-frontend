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
} from "./featureStyled";

export default function WhoWeAre() {
  const cardsData = [
    {
      icon: "/icons/explore.png",
      title: "Career Cards",
      text: "See job descriptions, skills, salaries and growth outlook.",
      titleColor: "#121212",
      textColor: "#242424",
      bgColor: "#FFB600",
    },
    {
      icon: "/icons/match.png",
      title: "University Match",
      text: "Find colleges offering your chosen course with smart filters.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#0F3359",
    },
    {
      icon: "/icons/personal.png",
      title: "Personal Dashboard",
      text: "Track exploration, save favourites and set goals.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#FF6600",
    },
  ];

  return (
    <Section>
      <Title>
        Tools & <Underline>Features</Underline>
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
