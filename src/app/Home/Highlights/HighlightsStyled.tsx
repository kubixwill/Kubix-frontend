import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 50px 100px;
  background: #ffffff;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 40px 60px;
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
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
    bottom: 0px;
    width: 100%;
    height: 5px;
    background: #ffb600;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
`;

export const Card = styled.div<{ bg: string }>`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 16 / 11; 
  border-radius: 16px;
  color: white;
  padding: 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  @media (max-width: 480px) {
    padding: 16px;
    aspect-ratio: 16 / 11; 
  }
`;


export const CardTitle = styled.h3<{ color?: string }>`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  max-width: 40%;
  color: ${(props) => props.color || "#ffffff"};

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CardText = styled.p<{ color?: string }>`
  font-size: 14px;
  font-weight: 400;
  max-width: 40%;
  line-height: 1.4;
  color: ${(props) => props.color || "#f3f3f3"};

  @media (max-width: 480px) {
    font-size: 13px;
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
