import React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { MjmlEmail } from "../mjml/mjml-email";
import { MJMLWrapper } from "../components/mjml-wrapper";

const TestEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>Log in with this magic link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text>This is a test template</Text>
          <MJMLWrapper mjml={<MjmlEmail />} />
        </Container>
      </Body>
    </Html>
  );
};
export default TestEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};
