// app/page.tsx
"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Icon,
  Stack,
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
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              color="white"
            >
              We are organizing for tenant rights and community power
            </Heading>
            <Divider borderColor="#FFF" />
            <Card maxW={"80%"}>
              <CardHeader>
                <Heading
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  color="black"
                >
                  Upcoming Events
                </Heading>
              </CardHeader>
              <CardBody>
                <EventDetails />
              </CardBody>
            </Card>
            <Divider borderColor="#FFF" />
            <Card maxW={"80%"}>
              <CardHeader>
                <Text fontSize="xl" color="black">
                  You can follow us on social media or email us to stay up to
                  date:
                </Text>
              </CardHeader>
              <CardBody>
                <Stack align="center" spacing="2rem">
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
                      <Icon as={FaInstagram} boxSize={16} color="black" />
                    </Link>
                    <Link href="mailto:to.centre.tenants@gmail.com" isExternal>
                      <Icon as={MdOutlineMail} boxSize={16} color="black" />
                    </Link>
                  </Stack>

                  <InstagramEmbed url="https://www.instagram.com/to.centre.tenants/" />
                </Stack>
              </CardBody>
            </Card>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
