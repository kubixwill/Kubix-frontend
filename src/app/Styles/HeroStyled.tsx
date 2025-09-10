import styled from "styled-components";

export const Section = styled.section`
  background: #ffffff;
  padding: 3rem 1rem;

  @media (min-width: 640px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 4rem;
  }
`;

export const Container = styled.div`
  padding: 50px 20px 0px 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
  max-width: auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 60px 40px 0px 40px;
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    padding: 50px 50px 0px 50px;
    gap: 4rem;
  }
`;

export const LeftContent = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  background: #fffcf5;
  border: 1px solid #d0d0d0;
  font-size: 0.85rem;
  font-weight: 500;
  color: #121212;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff6600;
`;

export const Heading = styled.h1`
  font-size: 2.2rem;
  line-height: 1.3;
  font-weight: 800;
  color: #121212;
  margin-bottom: 0.8rem;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1280px) {
    font-size: 4rem;
  }
`;

export const Highlight = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 10px;
    background: #ffb600;
    z-index: 1;

    @media (min-width: 768px) {
      bottom: -8px;
      height: 12px;
    }
  }
`;

export const Subtext = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #242424;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 1rem;
  }
`;

export const PrimaryButton = styled.button`
  padding: 0.6rem 1.3rem;
  border-radius: 10px;
  background: #007a1e;
  color: #fff;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #15803d;
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    padding: 0.7rem 1.5rem;
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.6rem 1.3rem;
  border-radius: 10px;
  border: 2px solid #ff6600;
  color: #ff6600;
  font-weight: 500;
  background: #fffcf5;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #fff7ed;
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    padding: 0.7rem 1.5rem;
  }
`;

export const RightImage = styled.div`
  img {
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
