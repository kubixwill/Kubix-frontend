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
      icon: "/icons/guides.png",
      title: "Step-by-Step Guides",
      text: "Learn how to use the Kubix app alongside your child.",
    },
    {
      icon: "/icons/book.png",
      title: "Future Job Markets",
      text: "Articles on course choices and careers via our Substack.",
    },
    {
      icon: "/icons/support.png",
      title: "Counsellor Support",
      text: "Direct contact details for personalised guidance.",
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
