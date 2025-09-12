import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 60px 100px;
  font-family: "Arial", sans-serif;
  background: #fff;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

export const Icon = styled.div`
  font-size: 28px;
  color: #ffb600; /* yellow */
  display: flex;
  align-items: center;
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
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 2px 0 0 0;
  color: #333;
`;

export const Right = styled.div`
  flex: 1;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  min-height: 420px; /* increase form height */
`;

export const FormLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
  color: #121212;
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
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #007A1E;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #15803d;
  }
`;
