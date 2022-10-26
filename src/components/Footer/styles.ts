import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #0d0d0d;
  padding: 4rem 0 0 0;
  max-width: 100vw;
  width: 100vw;
`;

export const Footer = styled.div`
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  gap: 10rem;

`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 2px;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.65;
  max-width: 40%;
  text-align: justify;
`;

export const Typography = styled.p`
  color: rgba(255, 255, 255, 0.7);
  width: 40%;
  text-align: justify;
`;

export const AnchorList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Anchor = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  :hover{
    text-decoration: underline;
  }
`;

export const ListTitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  letter-spacing: 0.3px;
  padding-bottom: 0.3rem;
`;

export const Divider = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 1px;
  margin: 2rem 0 0 0;
`;

export const Copyright = styled.p`
display: grid;
padding: 1rem;
place-items: center;
color: rgba(255, 255, 255, 0.6);
`;
