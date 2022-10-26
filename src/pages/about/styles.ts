import styled from "styled-components";


export const MainView = styled.div`
  background: #0d0d0d;
  max-height: 100vh;
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  gap:1rem;

`;

export const Section = styled.div`
  padding: 3rem 0; 
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  width: 50%;
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
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 3rem;
`;

export const SubInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 0.5px solid rgba(255, 255, 255, 0.6);
  width: 100%;
  justify-content: space-between;
  padding: 1rem 0 0 1rem;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.95);
`;

export const MainSubtitle = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;
  max-width: 40%;
  text-align: justify;
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
  height: 100%;
  object-fit: cover;
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
  align-self: flex-end;
  max-width: 50%;
`;

