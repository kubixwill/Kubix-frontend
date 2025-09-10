import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 100px;
  text-align: center;
  background: #fff;

  @media (max-width: 1200px) {
    padding: 50px 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
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

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 10px;

    -ms-overflow-style: none;  /* IE & Edge */
    scrollbar-width: none;     /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Card = styled.div`
  background: #FFFCF5;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 auto; /* keeps original card width on scroll */

  @media (max-width: 1024px) {
    padding: 18px;
  }

  @media (max-width: 768px) {
    width: 280px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    width: 220px;
    padding: 14px;
  }
`;

export const Stars = styled.div`
  color: #fdb813;
  font-size: 1.2rem;
  display: flex;
  gap: 4px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ddd;
  margin: 15px 0;

  @media (max-width: 768px) {
    margin: 12px 0;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const NameRole = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1rem;
    color: #000;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  span {
    font-size: 0.9rem;
    color: #555;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;
