import { Link } from "@chakra-ui/next-js";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

interface EventCardProps {
  event: GoogleCalendarEvent;
}

export default function HorizontalEventCard({ event }: EventCardProps) {
  console.log(event);
  return (
    <Card
      direction="row"
      variant="outline"
      background="#1C9E50"
      overflow="scroll"
    >
      <CardHeader maxW="10rem" background="black">
        <EventCardHeader event={event} />
      </CardHeader>
      <CardBody>
        <Stack align="center">
          <EventCardBody event={event} />
          <Divider />
          <EventCardFooter event={event} />
        </Stack>
      </CardBody>
    </Card>
  );
}

function EventCardHeader({ event }: EventCardProps) {
  const newDate = event.start.dateTime ? new Date(event.start.dateTime) : null;

  return (
    <Heading
      fontSize={{ base: "2xl", md: "3xl", lg: "4xl", sm: "xl" }}
      color="white"
    >
      {newDate ? newDate.toDateString() : "TBD"}
    </Heading>
  );
}

function EventCardBody({ event }: EventCardProps) {
  const eventTitle = event.summary || "Upcoming Event";
  const eventDescription =
    event.description || "Check back soon to see more about this event!";
  return (
    <Stack>
      <Heading
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl", sm: "xl" }}
        color="white"
      >
        {eventTitle}
      </Heading>
      <Divider />
      <Text size="lg" color="white">
        {eventDescription}
      </Text>
    </Stack>
  );
}

function EventCardFooter({ event }: EventCardProps) {
  const location = event.location || "TBD";
  const locationURL = location
    ? `https://maps.google.com/?q=${location}`
    : undefined;
  if (locationURL) {
    return (
      <Link href={locationURL} target="_blank">
        <Heading fontSize={{ md: "xl", lg: "2xl", sm: "sm" }} color="white">
          {location}
        </Heading>
      </Link>
    );
  }
  return <Heading size="md">{location}</Heading>;
}
