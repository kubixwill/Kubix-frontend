"use client";

import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Section, Title, Underline, FAQContainer, FAQItem, Question, Answer, IconWrapper } from "./faqStyled";

const faqs = [
  {
    question: "How secure is my child’s data?",
    answer:
      "Kubix ensures strict compliance with data privacy policies and never shares personal information without consent.",
  },
  {
    question: "Does Kubix help with exam preparation?",
    answer:
      "Yes. Kubix provides reliable, data-backed guidance that helps students prepare effectively for exams by aligning their learning paths with their goals.",
  },
  {
    question: "Is there a fee for using Kubix?",
    answer:
      "Kubix offers free resources and paid premium features. Parents can choose a plan that best suits their child’s exploration and preparation needs.",
  },
  {
    question: "How can I support my child’s exploration?",
    answer:
      "Parents can use the Kubix app alongside their child, follow our step-by-step guides, read articles on future job markets, and connect with our counsellors for personalised support.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section>
      <Title>
        Frequently Asked <Underline>Questions</Underline>
      </Title>
      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem key={index} onClick={() => toggleFAQ(index)}>
            <Question>
              {faq.question}
              <IconWrapper>
                {activeIndex === index ? <FaTimes /> : <FaPlus />}
              </IconWrapper>
            </Question>
            {activeIndex === index && <Answer>{faq.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQContainer>
    </Section>
  );
}
