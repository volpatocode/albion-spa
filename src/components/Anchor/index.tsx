import { Anchor } from "./styles";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navbarType } from "../../types/types";

export default function index({ anchor, page, href }: navbarType) {
  const scrollPosition = useScrollPosition();

  return (
    <Anchor
      style={
        scrollPosition > 5 || page == "product" || page == "about"
          ? { color: "rgba(255, 255, 255, 0.95)" }
          : { color: "#0D0D0D" }
      }
      href={href}
    >
      {anchor}
    </Anchor>
  );
}
