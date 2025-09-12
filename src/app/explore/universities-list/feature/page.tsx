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
      title: "Search & Filters",
      text: "Narrow your search by location, stream, entrance exam, fee range and program type.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#007A1E",
    },
    {
      icon: "/icons/file.png",
      title: "Detailed Pages",
      text: "Access details on mission, programs, fees, timelines, reviews and media.",
      titleColor: "#121212",
      textColor: "#242424",
      bgColor: "#FFB600",
    },
    {
      icon: "/icons/cal.png",
      title: "Book Counseling",
      text: "Schedule a session with a Kubix counsellor to discuss course choices.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#0F3359",
    },
    {
      icon: "/icons/users.png",
      title: "University Onboarding",
      text: "Universities can apply to be listed to reach thousands of Kubix students.",
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
