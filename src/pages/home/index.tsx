import Navbar from "../../components/Navbar";

import { PageWrapper, Content, TitleBox, Title } from "./styles";
import CardList from "../../components/CardList";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar logo="black" anchor="black" />
      <Content>
        <TitleBox>
          <Title>be lupus</Title>
          <Title style={{alignSelf: "flex-end"}} >be us</Title>
        </TitleBox>
        <CardList/>
      </Content>
    </PageWrapper>
  );
}
