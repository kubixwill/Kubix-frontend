"use client";

import {
  Section,
  Title,
  Underline,
  CardGrid,
  Card,
  CardTitle,
  CardText,
} from "./HighlightsStyled";

export default function WhoWeAre() {
  const cardsData = [
    {
      title: "Career Exploration",
      text: "Interactive filters let you explore paths by stream → subject → cluster.",
      bg: "/assets/HCard_img1.png",
      titleColor: "#121212",
      textColor: "#242424",
    },
    {
      title: "Kubix Studios",
      text: "Physical experience centres where you can meet counsellors, use psychometric tools and join workshops.",
      bg: "/assets/HCard_img2.png",
      titleColor: "#121212",
      textColor: "#242424",
    },
    {
      title: "Kubix App",
      text: "Your pocket career coach – quizzes, skills assessments and personalised recommendations.",
      bg: "/assets/HCard_img3.png",
      titleColor: "#121212",
      textColor: "#242424",
    },
  ];

  return (
    <Section>
     <Title>
    Feature <Underline>Highlights</Underline>
    </Title>
      <CardGrid>
        {cardsData.map((card, index) => (
          <Card key={index} bg={card.bg}>
            <div>
              <CardTitle color={card.titleColor}>{card.title}</CardTitle>
              <CardText color={card.textColor}>{card.text}</CardText>
            </div>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
}
