import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 100px;
  text-align: center;
  background: #fff;

  @media (max-width: 1200px) {
    padding: 50px 80px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #121212;

  @media (max-width: 1200px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 25px;
  }
`;

export const Underline = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 5px;
    background: #FFB600;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 800px;
  margin: 0 auto 30px;
  line-height: 1.6;

  @media (max-width: 1200px) {
    font-size: 1.15rem;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const Button = styled.button`
  background-color: #047a1c;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #046b18;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 12px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 16px;
  }
`;
