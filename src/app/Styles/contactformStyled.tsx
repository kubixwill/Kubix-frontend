import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 60px 100px;
  background: #fff;

  @media (max-width: 820px) {
    flex-direction: column;
    padding: 40px 30px;
    gap: 40px;
  }

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    height: 220px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const Icon = styled.div`
  font-size: 28px;
  color: #ffb600; /* yellow */
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #000;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 2px 0 0 0;
  color: #333;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Right = styled.div`
  flex: 1;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  min-height: 420px;

  @media (max-width: 820px) {
    min-height: auto;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const FormLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
  color: #121212;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  color: #121212;

  &::placeholder {
    color: #676767;
  }

  &:focus {
    border-color: #16a34a;
    box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 12px 14px;
  margin-bottom: 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  resize: none;
  outline: none;
  color: #121212;

  &::placeholder {
    color: #676767;
  }

  &:focus {
    border-color: #16a34a;
    box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.2);
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px 12px;
    height: 120px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #007a1e;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #15803d;
  }

  @media (max-width: 600px) {
    padding: 12px;
    font-size: 15px;
  }
`;
