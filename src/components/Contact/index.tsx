import { Contact } from "./styles";
import Icon from "@mdi/react";
import { mdiInstagram } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
import { mdiCellphone } from "@mdi/js";

type contactType = {
  type: string;
  info: string;
};

export default function index({ type, info }: contactType) {
  const icon = {
    number: mdiCellphone,
    email: mdiEmail,
    insta: mdiInstagram,
  };

  return (
    <Contact>
      <Icon
        //@ts-ignore
        path={icon[type]}
        title="Instagram"
        size={1}
        color="rgba(255, 255, 255, 0.95)"
      />
      {info}
    </Contact>
  );
}
