import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 100px;
  text-align: center;
  background: #fff;

  @media (max-width: 1200px) {
    padding: 50px 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
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

export const FAQContainer = styled.div`
  max-width: auto;
  margin: 0 auto;
  text-align: left;
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
  cursor: pointer;
`;

export const Question = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121212;
`;

export const Answer = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 10px;
  line-height: 1.5;
`;

export const IconWrapper = styled.span`
  font-size: 16px;
  margin-left: 12px;
  display: flex;
  align-items: center;
`;