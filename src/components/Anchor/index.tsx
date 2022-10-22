import { Anchor } from "./styles";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navbarType } from "../../types/types";


export default function index({ anchor, page }: navbarType) {
  const scrollPosition = useScrollPosition();

  return (
    <Anchor page={page}
      style={
        scrollPosition > 5 ? { color: "white" } : { color: "black" }
      }
    >
      {anchor}
    </Anchor>
  );
}
