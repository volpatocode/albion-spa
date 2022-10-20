import styled from "styled-components";

type buttonType = {
  variant?: "outlined" | "contained";
};

type typographyType = {
  align?: string;
};

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.95) 30%,
    rgba(0, 0, 0, 0.95) 30%,
    rgba(0, 0, 0, 0.95) 100%
  );
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 15%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1rem 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.7px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Button = styled.button<buttonType>`
  cursor: pointer;
  padding: 0.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.95);
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.4px;
  transition: all 300ms ease-in-out;
  color: ${(props) =>
    props.variant == "outlined"
      ? "rgba(255, 255, 255, 0.95)"
      : "rgba(0, 0, 0, 0.95)"};
  background-color: ${(props) =>
    props.variant == "outlined"
      ? "rgba(0, 0, 0, 0.95)"
      : "rgba(255, 255, 255, 0.95)"};
  width: ${(props) => (props.variant == "outlined" ? "40%" : "60%")};

  :hover {
    background-color: ${(props) =>
      props.variant == "outlined"
        ? "rgba(255, 255, 255, 0.95)"
        : "rgba(0, 0, 0, 0.95)"};
    color: ${(props) =>
      props.variant == "outlined"
        ? " rgba(0, 0, 0, 0.95)"
        : " rgba(255, 255, 255, 0.95)"};
  }
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 1px;
`;

export const Subtitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.5px;
`;

export const Legend = styled.p`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);

  :hover {
    text-decoration: underline;
  }
`;

export const Typography = styled.p<typographyType>`
  color: rgba(255, 255, 255, 0.7);
  text-align: ${(props) => (props.align == "justify" ? "justify" : "start")};
`;

export const Price = styled.h2`
  font-weight: 600;
  letter-spacing: 0.4px;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-self: flex-end;

  :hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 20%;
  margin: 3rem;
`;
