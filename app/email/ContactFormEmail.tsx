import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  name: string;
  message: string;
  email: string;
};

export const ContactFormEmail = ({
  name,
  message,
  email,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview className="font-primary font-medium">
        New message from {name} on your portfolio site!
      </Preview>
      <Tailwind>
        <Body className="border-md bg-[#0a192f]">
          <Container>
            <Section className="p-8">
              <Heading className="font-primary text-2xl font-semibold tracking-wide text-gray-300">
                New Message From: {name}, on your portfolio site!
              </Heading>
              <Text className="font-secondary mt-4 text-xl font-medium leading-loose text-[#A9A9A9]">
                {message}
              </Text>
              <Hr />
              <Text className="font-tertiary mt-4 text-base font-medium text-gray-400">
                Sender&apos;s email: {email}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
