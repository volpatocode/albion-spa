import styled from "styled-components";

export const PageWrapper = styled.div`
  background: #0d0d0d;
  min-height: 100vh;
  height: fit-content;
  max-width: 100vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
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

export const InfoWrapper = styled.div``;

export const FormWrapper = styled.div``;

export const TitleBox = styled.div``;

export const PageTitle = styled.h4``;

export const MainTitle = styled.h1``;

export const Description = styled.p``;

export const ContactBox = styled.div``;

export const Input = styled.input``;

export const TextInput = styled.textarea`
  resize: none;
`;
