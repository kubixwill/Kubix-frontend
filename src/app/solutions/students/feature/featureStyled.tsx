import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 50px 20px;
  background: #ffffff;
  text-align: center;

  @media (min-width: 768px) {
    padding: 60px 60px;
  }

  @media (min-width: 1200px) {
    padding: 80px 100px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px; /* reduced gap */
  color: #121212;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

export const Underline = styled.span`
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 5px;
    background: #ffb600;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div<{ bgColor: string }>`
  background: ${(props) => props.bgColor || "#333"};
  border-radius: 16px;
  color: white;
  padding: 24px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }
`;

export const CardIcon = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  img, svg {
    width: 35px;
    height: 35px;
  }
`;

export const CardTitle = styled.h3<{ color?: string }>`
  font-size: 1.35rem;  /* ~22px */
  font-weight: 700;
  margin-bottom: 8px;
  color: ${(props) => props.color || "#ffffff"};
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.5rem;  /* ~24px */
  }

  @media (min-width: 1200px) {
    font-size: 1.65rem;  /* ~26px */
  }
`;

export const CardText = styled.p<{ color?: string }>`
  font-size: 1rem;  /* 16px */
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.color || "#f3f3f3"};
  width: 100%;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.05rem; /* 17px */
  }

  @media (min-width: 1200px) {
    font-size: 1.1rem; /* 18px */
  }
`;

export const LearnMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  padding: 10px 16px;
  background: #fff;
  color: #000;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #f3f3f3;
    transform: translateY(-2px);
  }
`;
