import { useLocation } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import { Logo } from "./styles";

export default function index() {
  const scrollPosition = useScrollPosition();
  const location = useLocation();

  return (
    <Logo
      style={
        scrollPosition > 5 || location.pathname == "/about"
          ? { color: "rgba(255, 255, 255, 0.95)" }
          : { color: "#0D0D0D" }
      }
      href="/"
    >
      lupus
    </Logo>
  );
}
