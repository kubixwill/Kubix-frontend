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
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #121212;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
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
    border-radius: 2px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: auto;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div<{ bgColor: string }>`
  background: ${(props) => props.bgColor || "#333"};
  border-radius: 16px;
  color: white;
  padding: 24px;
  min-height: 200px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3<{ color?: string }>`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${(props) => props.color || "#ffffff"};

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const CardText = styled.p<{ color?: string }>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  color: ${(props) => props.color || "#f3f3f3"};

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const LearnMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  padding: 10px 16px;
  background: #fff;
  color: #000;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  align-self: flex-start;
  transition: all 0.3s ease;

  &:hover {
    background: #f3f3f3;
    transform: translateY(-2px);
  }
`;
