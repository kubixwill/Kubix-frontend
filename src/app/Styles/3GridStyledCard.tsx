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
    bottom: 0px;
    width: 100%;
    height: 4px; /* slightly thinner */
    background: #ffb600;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* slightly smaller min */
  gap: 16px; /* reduced gap */
  max-width: auto;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div<{ bg: string }>`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 16 / 11; 
  border-radius: 16px;
  padding: 20px; /* reduced padding */
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* icon at top, text below */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  @media (max-width: 480px) {
    padding: 14px;
  }
`;

export const CardIcon = styled.div`
  margin-bottom: 10px; /* reduced gap */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img, svg {
    width: 40px;
    height: 40px;
  }
`;

export const CardTitle = styled.h3<{ color?: string }>`
  font-size: 32px;      
  font-weight: 700;      
  margin-bottom: 6px;
  color: ${(props) => props.color || "#121212"};
  width: 100%;          

    @media (max-width: 480px) {
    font-size: 24px;     /* smaller on mobile */
    }

`;

export const CardText = styled.p<{ color?: string }>`
  font-size: 22px;       
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.color || "#242424"};
  width: 100%;           
  margin: 0;

  @media (max-width: 480px) {
    font-size: 16px;     /* smaller on mobile */
  }
`;


export const LearnMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px; /* reduced gap */
  padding: 8px 14px;
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
