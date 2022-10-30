import { useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import { Menu, MenuContainer, MenuLine } from "./styles";

export default function index() {
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
            scrollPosition > 5 ? { background: "rgb(255, 255, 255, 0.95)" } : {}
          }
        />
        <MenuLine
          style={
            scrollPosition > 5 ? { background: "rgb(255, 255, 255, 0.95)" } : {}
          }
        />
        <MenuLine
          style={
            scrollPosition > 5 ? { background: "rgb(255, 255, 255, 0.95)" } : {}
          }
        />
      </MenuContainer>
    </Menu>
  );
}
