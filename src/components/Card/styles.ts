import styled from "styled-components";

export const Card = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  text-decoration: none;
  border-radius: 2px;
  gap: 1rem;
  transition: all 300ms ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  border-left: 0.4px solid rgb(255, 255, 255, 0.95);
  border-right: 0.4px solid rgb(255, 255, 255, 0.95);
  @media (max-width: 1000px) {
    width: 40%;
    :hover {
      transform: none;
    }
  }
  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const ProductName = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  height: 10%;
`;

export const Image = styled.img`
  max-height: 100%;
  width: 100%;
  object-fit: contain;
  @media (max-width: 1000px) {
    max-height: none;
  }
`;
