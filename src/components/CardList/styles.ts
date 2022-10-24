import styled from "styled-components";

export const CardList = styled.div`
  width: 100vw;
  height: 20vh;
  background: #0D0D0D;
  margin-left: calc(50% - 50vw);

`;

export const Container = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  padding: 0 15%;

`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 100%;
  border-left: 0.4px solid rgb(255, 255, 255, 0.95);
  border-right: 0.4px solid rgb(255, 255, 255, 0.95);
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
`;
