import styled from "styled-components";

export const PageWrapper = styled.div`
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
  background: #0D0D0D;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 15%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.95);
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

