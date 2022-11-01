import {
  ContactBox,
  Description,
  FormWrapper,
  InfoWrapper,
  Input,
  MainContent,
  MainTitle,
  PageTitle,
  PageWrapper,
  TextInput,
  TitleBox,
} from "./styles";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar page="contact" />
      <MainContent>
        <InfoWrapper>
          <TitleBox>
            <PageTitle>Contact me</PageTitle>
            <MainTitle>How can i help you?</MainTitle>
            <Description>Fill in the form or drop an email</Description>
          </TitleBox>
          <ContactBox>
            <Contact type="number" info="+1 012 345 678" />
            <Contact type="email" info="contact@lupus.com" />
            <Contact type="insta" info="lupus" />
          </ContactBox>
        </InfoWrapper>
        <FormWrapper>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <TextInput/>
        </FormWrapper>
      </MainContent>
      <Footer />
    </PageWrapper>
  );
}
