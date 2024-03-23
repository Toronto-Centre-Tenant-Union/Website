import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import EventCard from "./EventCard";

export default function EventDetails(){
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchData = async() => {
      const resp = await fetch('/api/events');
      const data = await resp.json();
      setEvents(data);
    }
    fetchData()
  }, [])


  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {events.map(event => (
        <EventCard event ={event}/>
      ))}
    </SimpleGrid>
  )
}
