import { useState } from "react";
import { useLocation } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navbarType } from "../../types/types";
import { Menu, MenuContainer, MenuLine } from "./styles";

export default function index({ page }: navbarType) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Menu onClick={handleMenu}>
      <MenuContainer>
        <MenuLine
          style={
            scrollPosition > 5 || page == "product" || page == "about"
              ? { background: "rgb(255, 255, 255, 0.95)" }
              : { background: "#0D0D0D" }
          }
        />
        <MenuLine
          style={
            scrollPosition > 5 || page == "product" || page == "about"
              ? { background: "rgb(255, 255, 255, 0.95)" }
              : { background: "#0D0D0D" }
          }
        />
        <MenuLine
          style={
            scrollPosition > 5 || page == "product" || page == "about"
              ? { background: "rgb(255, 255, 255, 0.95)" }
              : { background: "#0D0D0D" }
          }
        />
      </MenuContainer>
    </Menu>
  );
}
