import Navbar from "../../components/Navbar";

import {
  PageWrapper,
  Content,
  MainContent,
  Image,
  TitleBox,
  Title,
} from "./styles";
import CardList from "../../components/CardList";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Home() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <PageWrapper>
      <Navbar
        navbg={scrollPosition > 5 ? "black" : "white"}
        logo={scrollPosition > 5 ? "white" : "black"}
        anchor={scrollPosition > 5 ? "white" : "black"}
      />
      <Content>
        <MainContent>
          <TitleBox>
            <Title>be lupus</Title>
            <Title style={{ alignSelf: "flex-end" }}>be us</Title>
          </TitleBox>
          <Image src="/test3.png" />
        </MainContent>
        <CardList />
      </Content>
    </PageWrapper>
  );
}
