import styled from "styled-components";

export const CardList = styled.div`
max-width: 100vw;
  width: 100vw;
  background: #0D0D0D;
  padding: 2rem 0;
  margin-left: calc(50% - 50vw);
  margin-bottom: 3rem;

`;

export const Container = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 100%;
  padding: 0 15%;
  @media (max-width: 1000px) {
    padding: 0 10%;
    flex-direction: column;
    height: fit-content;
  }
  @media (max-width: 600px) {
    padding: 0 5%;
}
@media (max-width: 400px) {
    padding: 0 3%;
}

`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  height: 100%;
  border-left: 0.4px solid rgb(255, 255, 255, 0.95);
  border-right: 0.4px solid rgb(255, 255, 255, 0.95);
  @media (max-width: 1000px) {
    border: none;
    border-bottom: 0.4px solid rgb(255, 255, 255, 0.95);
}
`;

export const Info = styled.h3`
  color: rgb(255, 255, 255, 0.95);
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding-left: 0rem;
}
`;
