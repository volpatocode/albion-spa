import styled from "styled-components";

export const PageWrapper = styled.div`
  background: #0d0d0d;
  height: fit-content;
  max-width: 100vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 0 15%;
  @media (max-width: 1000px) {
    padding: 0 10%;
  }
  @media (max-width: 600px) {
    padding: 0 5%;
  }
  @media (max-width: 400px) {
    padding: 0 3%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const TitleBox = styled.div``;

export const PageTitle = styled.h4`
  color: #eeb100;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const MainTitle = styled.h1`
  color: rgba(255, 255, 255, 0.95);
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
  color: rgba(255, 255, 255, 0.95);
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.95);
  padding: 6px 8px;
  width: 100%;

  ::placeholder {
    color: rgba(255, 255, 255, 0.95);
  }
`;

export const TextInput = styled.textarea`
  resize: none;
  color: rgba(255, 255, 255, 0.95);
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.95);
  padding: 6px 8px;
  width: 100%;

  ::placeholder {
    color: rgba(255, 255, 255, 0.95);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.95);
  color: #0d0d0d;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 300ms ease-in-out;
  border: 1px solid transparent;

  :hover {
    background-color: #0d0d0d;
    color: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.95);
  }
`;
