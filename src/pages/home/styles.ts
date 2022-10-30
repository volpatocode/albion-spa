import styled from "styled-components";

export const PageWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
`;

export const MainView = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: 600px) {
 max-height: none;
 height: fit-content;
}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0 15%;
  @media (max-width: 1000px) {
    padding: 0 10%;
  }
  @media (max-width: 600px) {
    padding: 0 5%;
    gap: 3rem;
}
@media (max-width: 400px) {
    padding: 0 3%;
}
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
}
`;

export const Image = styled.img`
  width: 18%;
  margin-right: 3rem;
  @media (max-width: 600px) {
    order: -1;
    width: 50%;
    margin: 0;
}
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  @media (max-width: 600px) {
    align-items: center;
}
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #0D0D0D;
  letter-spacing: 2px;
`;
