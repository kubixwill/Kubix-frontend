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
      title: "Advanced Filters",
      text: "Students can search by country, stream, course type and accepted exams.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#007A1E",
    },
    {
      icon: "/icons/user.png",
      title: "Detailed Profiles",
      text: "See job descriptions, skills, salaries and growth outlook.",
      titleColor: "#121212",
      textColor: "#242424",
      bgColor: "#FFB600",
    },
    {
      icon: "/icons/cube.png",
      title: "Visual Content",
      text: "Upload photos and videos of your campus and facilities.",
      titleColor: "#ffffff",
      textColor: "#f3f3f3",
      bgColor: "#0F3359",
    },
    {
      icon: "/icons/cal.png",
      title: "Counseling Booking",
      text: "Allow students to schedule counselling sessions directly through Kubix.",
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
