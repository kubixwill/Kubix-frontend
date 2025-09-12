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
} from "../../Styles/4CardsStyled";

export default function WhoWeAre() {
  const cardsData = [
        {
      icon: "/icons/obook.png",
      title: "Career Guides",
      text: "Deep dives into different professions, skills required and future outlooks.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#007A1E",
    },
    {
      icon: "/icons/file.png",
      title: "Reports & Whitepapers",
      text: "Data-driven insights into the Indian education and employment landscape.",
      titleColor: "#121212",
      textColor: "#242424",
      bgColor: "#FFB600",
    },
    {
      icon: "/icons/cbook.png",
      title: "Student Stories",
      text: "Real experiences and case studies from Kubix users.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#0F3359",
    },
    {
      icon: "/icons/mail.png",
      title: "Tools & Templates",
      text: "Checklists, roadmaps and self-assessment tools to help you plan your journey.",
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
