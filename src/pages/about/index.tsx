import {
  PageWrapper,
  MainContent,
  InfoWrapper,
  MainTitle,
  Image,
  MainSubtitle,
  SubInfoWrapper,
  Anchor,
  MainView,
  Box,
  BoxTitle,
  BoxDescription,
  SectionWrapper,
  Section,
} from "./styles";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <PageWrapper>
      <MainView>
        <Navbar page="about" />
        <MainContent>
          <InfoWrapper>
            <MainTitle>Striking and unique fragrances</MainTitle>
            <SubInfoWrapper>
              <Anchor href="#content">Scroll to explore</Anchor>
              <MainSubtitle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, aut. Deserunt accusantium fugiat aliquid quibusdam
                nisi adipisci, doloribus culpa.
              </MainSubtitle>
            </SubInfoWrapper>
          </InfoWrapper>
          <Image src="/blackandwhite.jpg" />
        </MainContent>
      </MainView>
      <SectionWrapper id="content">
        <Section>
          <Box>
            <BoxTitle>Planing</BoxTitle>
            <BoxDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet
              consectetur adipisicing.
            </BoxDescription>
          </Box>
          <Box>
            <BoxTitle>Estimating</BoxTitle>
            <BoxDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet
              consectetur adipisicing.
            </BoxDescription>
          </Box>
          <Box>
            <BoxTitle>Building</BoxTitle>
            <BoxDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet
              consectetur adipisicing.
            </BoxDescription>
          </Box>
          <Box>
            <BoxTitle>Delivering</BoxTitle>
            <BoxDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet
              consectetur adipisicing.
            </BoxDescription>
          </Box>
        </Section>
        <Section>
          <Image
            style={{ width: "80%", alignSelf: "flex-end" }}
            src="/holding.jpg"
          />
          <BoxTitle style={{ width: "80%", alignSelf: "flex-end" }}>
            Discover our product
          </BoxTitle>
          <BoxDescription style={{ width: "80%", alignSelf: "flex-end", maxWidth: "none" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet
            consectetur adipisicing.
          </BoxDescription>
        </Section>
      </SectionWrapper>

      <Footer />
    </PageWrapper>
  );
}
