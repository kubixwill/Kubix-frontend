import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: #ffffffcc; /* translucent */
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (min-width: 375px) {
    padding: 13px 16px;
  }

  @media (min-width: 640px) {
    padding: 16px 30px;
  }

  @media (min-width: 768px) {
    padding: 16px 40px;
  }

  @media (min-width: 1024px) {
    padding: 18px 70px;
  }

  @media (min-width: 1280px) {
    padding: 20px 100px;
    max-width: auto;
    margin: 0 auto;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: auto;

    @media (min-width: 375px) {
      width: 110px;
    }

    @media (min-width: 640px) {
      width: 130px;
    }

    @media (min-width: 768px) {
      width: 140px;
    }

    @media (min-width: 1024px) {
      width: 150px;
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 18px;
  margin-left: auto;
  margin-right: 10px;

  @media (min-width: 1024px) {
    gap: 28px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  color: #222;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007a1e;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const GetAppButton = styled.button`
  background: linear-gradient(135deg, #007a1e, #00b42a);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border: none;
  padding: 7px 14px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  @media (min-width: 375px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (min-width: 640px) {
    font-size: 15px;
    padding: 9px 20px;
  }

  @media (min-width: 1024px) {
    padding: 10px 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: block;
  cursor: pointer;
  margin-left: 10px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 60px;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  height: calc(100vh - 60px);
  background: #fff;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: right 0.3s ease;
  overflow-y: auto;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.05);
  z-index: 999;

  width: 100%;

  @media (max-width: 360px) {
    padding: 14px; /* less padding for extra small */
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 85%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const MobileNavItem = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #222;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 6px;
  border-radius: 6px;
  transition: background 0.3s ease;

  &:hover {
    background: #f9f9f9;
  }

  @media (min-width: 640px) {
    font-size: 17px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    padding: 8px 4px;
  }
`;

export const DropdownIcon = styled.div<{ isOpen: boolean }>`
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
`;

export const MobileDropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  margin-bottom: 6px;

  @media (max-width: 360px) {
    padding-left: 10px;
  }
`;

export const MobileDropdownItem = styled.div`
  font-size: 14px;
  padding: 8px 0;
  color: #444;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007a1e;
  }

  @media (min-width: 640px) {
    font-size: 15px;
  }

  @media (max-width: 360px) {
    font-size: 13px;
  }
`;
