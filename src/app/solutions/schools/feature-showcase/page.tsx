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
} from "../../../Styles/3GridStyledCard";

interface CardData {
  icon: string;
  title: string;
  text: string;
}

export default function WhoWeAre() {
  const sharedBg = "/assets/CardBG.png"; 

  const cardsData: CardData[] = [
    {
      icon: "/icons/graph.png",
      title: "Administrative Dashboard",
      text: "View student engagement, monitor career interests and export reports.",
    },
    {
      icon: "/icons/book.png",
      title: "Career Workshops",
      text: "Access curriculum‑aligned workshop modules and toolkits for Grades 9–12.",
    },
    {
      icon: "/icons/date.png",
      title: "Booking Workflow",
      text: "Schedule on‑site sessions with Kubix counsellors or virtual workshops.",
    },
  ];

  return (
    <Section>
      <Title>
        Your Journey to  <Underline>Success</Underline>
      </Title>
      <CardGrid>
        {cardsData.map((card, index) => (
          <Card key={index} bg={sharedBg}>
            <CardIcon>
              <Image src={card.icon} alt={card.title} width={48} height={48} />
            </CardIcon>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
}
