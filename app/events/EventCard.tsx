import { Link } from "@chakra-ui/next-js";
import { Card, CardBody, CardFooter, CardHeader, Divider, Heading, Stack, Text } from "@chakra-ui/react";

interface EventCardProps {
  event: GoogleCalendarEvent
}

export default function EventCard({event}: EventCardProps) {
  console.log(event)
  return (
    <Card maxW={"25rem"}>
      <CardHeader>
        <EventCardHeader event={event} />
      </CardHeader>
      <CardBody>
        <EventCardBody event={event}/>
      </CardBody>
      <CardFooter>
        <EventCardFooter event={event} />
      </CardFooter>
    </Card>
  )
}

function EventCardHeader({event}: EventCardProps) {
  const newDate = event.start.dateTime ? new Date(event.start.dateTime) : null;

  return (
    <Heading size='xl'>{
      newDate ? newDate.toLocaleDateString() : "TBD"
    }</Heading>
  )
}

function EventCardBody({event}: EventCardProps) {
  const eventTitle = event.summary || 'Upcoming Event'
  const eventDescription = event.description || 'Check back soon to see more about this event!'
  return (
    <Stack>
      <Heading size='lg'>{eventTitle}</Heading>
      <Divider borderColor="#FFF" />
      <Text size='lg'>{eventDescription}</Text>
    </Stack>
  )
}

function EventCardFooter({event}: EventCardProps) {
  const location = event.location || "TBD";
  const locationURL = location ? `https://maps.google.com/?q=${location}` : undefined;
  if(locationURL) {
    return (
      <Link href={locationURL} target="_blank">
      <Heading size='md'>        
        {location}
    </Heading>
    </Link>
    )
  }
  return (
    <Heading size='md'>
        {location}
    </Heading>
  )
}