import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #FDB913; 
  color: #121212;
  padding: 60px 100px 20px 100px;
  font-family: 'DM Sans', sans-serif;

  @media (max-width: 1200px) {
    padding: 50px 80px 20px 80px;
  }

  @media (max-width: 768px) {
    padding: 40px 30px 20px 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px 15px 15px;
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  img {
    width: 160px;
    height: auto;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      width: 140px;
    }

    @media (max-width: 480px) {
      width: 120px;
    }
  }
`;

export const FooterTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const FooterText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
  color: #121212;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterLink = styled.li`
  position: relative;
  font-size: 16px;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:hover > ul {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

/* Dropdown Styles */
export const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  background: #fff;
  color: #121212;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px 0;
  margin: 6px 0 0 0;
  min-width: 180px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 100;
`;

export const DropdownItem = styled.li`
  padding: 8px 14px;
  font-size: 15px;
  cursor: pointer;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background: #f5f5f5;
  }
`;

export const SubscribeBox = styled.div`
  display: flex;
  margin-top: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
`;

export const SubscribeInput = styled.input`
  padding: 10px 12px;
  border: 1px solid #D1D5DB;
  background-color: #fff;
  outline: none;
  flex: 1;
  border-radius: 6px 0 0 6px;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 9px 10px;
  }

  @media (max-width: 480px) {
    border-radius: 6px;
    padding: 8px 10px;
  }
`;

export const SubscribeButton = styled.button`
  background-color: #007A1E;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border: none;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  cursor: pointer;

  &:hover {
    background-color: #006618;
  }

  @media (max-width: 480px) {
    border-radius: 6px;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;

  @media (max-width: 480px) {
    gap: 12px;
    margin-top: 8px;
  }
`;

export const SocialIcon = styled.div`
  font-size: 22px;
  cursor: pointer;

  &:hover {
    color: #007a1e;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #121212;
  padding-top: 16px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-top: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding-top: 12px;
  }
`;
