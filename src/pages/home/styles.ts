import styled from "styled-components";

export const PageWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0 15%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.95);
  letter-spacing: 2px;

  
`;
