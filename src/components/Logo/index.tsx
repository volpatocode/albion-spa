import useScrollPosition from "../../hooks/useScrollPosition";
import { Logo } from "./styles";

export default function index() {
  const scrollPosition = useScrollPosition();

  return (
    <Logo
      style={scrollPosition > 5 ? { color: "white" } : { color: "black" }}
      href="/"
    >
      lupus
    </Logo>
  );
}
