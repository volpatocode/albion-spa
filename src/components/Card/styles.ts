import styled from "styled-components";

export const Card = styled.a`
cursor: pointer;
  width: 20%;
  height: 75%;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: 150ms ease-in-out;
  :hover {
    transform: scale(1.05);
  }

`;

export const ProductName = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  height: 10%;

`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
`;
