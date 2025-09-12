import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px 50px;
  background: #fff;

  @media (max-width: 1024px) {
    padding: 40px 30px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    gap: 30px;
  }
`;

export const ContentBlock = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const TextContent = styled.div`
  flex: 1;
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

export const Underlines = styled.span`
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
export const Underline = styled.div<{ align?: "left" | "right" }>`
  width: 100px;
  height: 4px;
  background: #ffb600;
  margin: 12px 0;

  ${({ align }) =>
    align === "right"
      ? "margin-left: auto;"
      : align === "left"
      ? "margin-right: auto;"
      : ""}

  @media (max-width: 768px) {
    margin: 10px auto;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  max-width: 600px;
  margin: 16px 0;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  object-fit: cover;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: start;
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
