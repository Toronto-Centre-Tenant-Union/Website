// app/page.tsx
"use client";
import {
  Divider,
  HStack,
  Heading,
  Icon,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Header from "./Header";
import styles from "./styles.module.css";
import { Link } from "@chakra-ui/next-js";
import { InstagramEmbed } from "react-social-media-embed";
import EventDetails from "./events/EventDetails";

export default function Page() {
  return (
    <div>
      <div className={styles.background} />
      <Stack className={styles.container}>
        <Header />
        <Stack align="center" spacing="4rem">
          <div className={styles.separator} />
          <Stack textAlign="center" alignItems="center" spacing="2rem">
            <Heading fontSize="6xl" color="white">
              We are organizing
            </Heading>
            <Divider borderColor="#FFF" />
              <EventDetails />
            <Divider borderColor="#FFF" />
            <Stack align="center" spacing="2rem">
              <Text fontSize="xl" color="white">
                You can follow us on social media or email us to stay up to
                date:
              </Text>
              <Stack
                flexDirection="row"
                alignItems="center"
                textAlign="center"
                spacing="2rem"
              >
                <Link
                  href="https://www.instagram.com/to.centre.tenants/"
                  isExternal
                >
                  <Icon as={FaInstagram} boxSize={16} color="white" />
                </Link>
                <Link href="mailto:to.centre.tenants@gmail.com" isExternal>
                  <Icon as={MdOutlineMail} boxSize={16} color="white" />
                </Link>
              </Stack>
            </Stack>
          </Stack>
          <HStack justifyContent="space-between">
            <InstagramEmbed url="https://www.instagram.com/to.centre.tenants/" />
          </HStack>
        </Stack>
      </Stack>
    </div>
  );
}
