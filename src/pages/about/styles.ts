import styled from "styled-components";

export const MainView = styled.div`
  background: #0d0d0d;
  min-height: 100vh;
  height: fit-content;
  max-width: 100vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding-bottom: 2rem;
  }
`;

export const PageWrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const SectionWrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  padding: 3rem 15%;
  display: flex;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.95);
  gap: 1rem;

  @media (max-width: 1000px) {
    padding: 3rem 10%;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 3rem 5%;
  }
  @media (max-width: 400px) {
    padding: 3rem 3%;
  }
`;

export const Section = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 15%;
  gap: 1rem;
  @media (max-width: 1000px) {
    padding: 0 10%;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 0 5%;
  }
  @media (max-width: 400px) {
    padding: 0 3%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 3rem;
  @media (max-width: 1000px) {
    width: 100%;
    gap: 1.5rem;
  }
`;

export const SubInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 0.5px solid rgba(255, 255, 255, 0.6);
  width: 100%;
  justify-content: space-between;
  padding: 1rem 0 0 1rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    border: none;
    gap: 1rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.95);
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const MainSubtitle = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;
  width: 40%;
  text-align: justify;
  @media (max-width: 1000px) {
    order: -1;
    width: 100%;
    text-align: center;
  }
`;

export const Anchor = styled.a`
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;

  animation: color-changing 4s infinite linear alternate;
  @keyframes color-changing {
    0% {
      color: rgba(255, 255, 255, 0.8);
    }
    50% {
      color: rgba(255, 255, 255, 0.5);
    }
    100% {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 90vh;
  object-fit: cover;
  @media (max-width: 1000px) {
    width: 100%;
    order: -1;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;
  min-height: 150px;
  padding: 1rem 0;
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.8);
  &:last-child {
    border: none;
  }
`;
export const BoxTitle = styled.h1`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-self: flex-start;
`;

export const BoxDescription = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(0, 0, 0, 1);
  line-height: 1.65;
  text-align: justify;
  display: flex;
`;
