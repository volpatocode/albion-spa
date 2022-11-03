import { useLocation } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import useWindowSize from "../../hooks/useWindowSize";
import { Logo } from "./styles";

export default function index() {
  const scrollPosition = useScrollPosition();
  const location = useLocation();
  const { width } = useWindowSize();

  return (
    <Logo
      style={
        scrollPosition > 5 ||
        location.pathname == "/about" ||
        location.pathname == "/contact" ||
        (location.pathname.includes("catalogue") && width < 1000)
          ? { color: "rgba(255, 255, 255, 0.95)" }
          : { color: "#0D0D0D" }
      }
      href="/"
    >
      lupus
    </Logo>
  );
}
