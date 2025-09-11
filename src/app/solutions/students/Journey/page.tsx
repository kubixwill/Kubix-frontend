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
      icon: "/icons/explore.png",
      title: "Explore Careers",
      text: "Browse pathways, skills, salary ranges and required courses.",
    },
    {
      icon: "/icons/user.png",
      title: "Discover Yourself",
      text: "Take psychometric and interest tests to uncover your strengths and passions.",
    },
    {
      icon: "/icons/star.png",
      title: "Build Your Portfolio",
      text: "Document achievements, projects and extracurriculars.",
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
