import { useEffect, useState } from "react";
import HorizontalEventCard from "./HorizontalEventCard";
import { Stack, Text } from "@chakra-ui/react";

export default function EventDetails() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("/api/events");
      const data = await resp.json();
      setEvents(data);
    };
    fetchData();
  }, []);

  if (!events || events.length <= 0) {
    return <Text>No upcoming events!</Text>;
  }

  return (
    <Stack>
      {events.map((event, idx) => (
        <HorizontalEventCard key={idx} event={event} />
      ))}
    </Stack>
  );
}
