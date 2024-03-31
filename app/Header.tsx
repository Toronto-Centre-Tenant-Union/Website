import { Image } from "@chakra-ui/next-js";
import {
  Center,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "./assets/TCTU_blue.png";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <HStack spacing="1rem">
      <Image
        src={logo}
        alt="TCTU logo"
        borderRadius={"full"}
        className={styles.logo}
      />
      {/* <Heading fontSize='3xl'>Toronto Centre Tenant Union</Heading> */}
      <Stack spacing="0">
        <Heading fontSize="3xl" color="white">
          Toronto Centre Tenant Union
        </Heading>
      </Stack>
{/*       <Center height="5rem">
        <Divider borderColor="white" orientation="vertical" />
      </Center>
      <Text fontSize="3xl" color="white">
        We're stronger together!
      </Text> */}
    </HStack>
  );
}
