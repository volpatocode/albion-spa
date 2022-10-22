import { ReactNode } from "react";

export type anchorType = {
  anchor?: string;
};

export type navbarType = {
  page?: "home" | "product";
  anchor?: ReactNode;
};
