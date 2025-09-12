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
      icon: "/icons/location.png",
      title: "Studio Locator",
      text: "Search studios by city and view them on a map.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#007A1E",
    },
    {
      icon: "/icons/support.png",
      title: "Studio Experience",
      text: "Explore tools like psychometric tests and VR career simulations.",
      titleColor: "#121212",
      textColor: "#242424",
      bgColor: "#FFB600",
    },
    {
      icon: "/icons/cal.png",
      title: "Book Appointment",
      text: "Choose a time to meet a counsellor for a guided session.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#0F3359",
    },
    {
      icon: "/icons/bag.png",
      title: "Franchise Opportunity",
      text: "Get details on investment, training and support to open a Kubix Studio.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#FF6600",
    },
  ];

  return (
    <Section>
      <Title>
       Studio <Underline>Features</Underline>
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
