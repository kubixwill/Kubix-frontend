import styled from "styled-components";

export const Section = styled.section`
  padding: 50px 100px;
  text-align: center;
  background: #fff;

  @media (max-width: 1024px) {
    padding: 40px 60px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #121212;

  @media (max-width: 1024px) {
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

export const Description = styled.p`
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 1.2rem;
  color: #242424;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 50px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin-bottom: 20px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.h3`
  font-size: 5rem;
  font-weight: 800;
  color: #08224c;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    font-size: 4.2rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const StatLabel = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #000;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
export const LogoSection = styled.div`
  background: #ffffff;
  padding: 0 0 50px 0;
  overflow: hidden; /* hides overflow for infinite scroll */

  @media (max-width: 1024px) {
    padding-bottom: 40px;
  }

  @media (max-width: 768px) {
    padding-bottom: 30px;
  }

  @media (max-width: 480px) {
    padding-bottom: 20px;
  }
`;


export const LogoScroller = styled.div`
  background: #fdb813;
  padding: 20px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    padding: 16px;
  }
  @media (max-width: 768px) {
    padding: 12px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const LogoTrack = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  animation: scroll 25s linear infinite;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 1024px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    gap: 12px;
  }
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const LogoItem = styled.div`
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  img {
    max-width: 40px;
    max-height: 40px;
    object-fit: contain;

    @media (max-width: 1024px) {
      max-width: 36px;
      max-height: 36px;
    }
    @media (max-width: 768px) {
      max-width: 32px;
      max-height: 32px;
    }
    @media (max-width: 480px) {
      max-width: 28px;
      max-height: 28px;
    }
  }

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;



export const LogoBar = styled.div`
  display: flex;
  width: max-content;
  gap: 20px;
  animation: scroll 25s linear infinite;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media (max-width: 1024px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    gap: 12px;
  }
  @media (max-width: 480px) {
    gap: 8px;
  }
`;
