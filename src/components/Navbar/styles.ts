import styled from "styled-components";

export const Navbar = styled.div`
  padding: 1rem 0;
  background: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
`;

export const Anchor = styled.a`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.95);

  transition: 200ms ease-in-out;

  :hover {
    color: rgba(255, 255, 255, 1);
    text-shadow: 2px 2px 8px rgba(255, 255, 255, 1);
  }
`;
