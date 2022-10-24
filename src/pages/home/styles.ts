import styled from "styled-components";

export const PageWrapper = styled.div`
  max-height: 100vh;
  width: 100vw;
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

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 18%;
  margin-right: 3rem;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #0D0D0D;
  letter-spacing: 2px;
`;
