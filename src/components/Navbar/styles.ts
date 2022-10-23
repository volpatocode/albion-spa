import styled from "styled-components";
import { navbarType } from "../../types/types";


export const Navbar = styled.div<navbarType>`
  padding: 1rem 0;
  transition: all 300ms ease-in-out;
  background-color: ${(props) => {
    switch (props.page) {
      case "home":
        return "rgba(255, 255, 255, 0.95)";
      case "product":
        return "transparent";
    }
  }};
  position: sticky;
  top: 0;

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

