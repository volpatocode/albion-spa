import { Card, Image, ProductName } from "./styles";

type cardType = {
  productName: string;
  src: string;
  href: string;
};

export default function index({ src, productName, href }: cardType) {
  return (
    <Card href={href}>
      <Image src={src} />
      <ProductName>{productName}</ProductName>
    </Card>
  );
}
