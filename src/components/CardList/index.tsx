import Card from "../Card";
import { CardList, Container, InfoBox, Info, CardBox} from "./styles";

export default function index() {
  return (
    <CardList>
      <Container>
      <InfoBox>
        <Info>New Products</Info>
      </InfoBox>
      <CardBox>
        <Card href="/catalogue/hypnose" src="/hypnose.png" productName="Hypnose"/>
        <Card href="/catalogue/mystere" src="/mystere.png" productName="Mystere"/>
        <Card href="/catalogue/chanel" src="/chanel.png" productName="Chanel Nº5"/>
        <Card href="/catalogue/olympea" src="/olympea.png" productName="Olympea"/>
      </CardBox>
      </Container>
    </CardList>
  );
}
