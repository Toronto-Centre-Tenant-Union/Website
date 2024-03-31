import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  const calendarId = process.env.GOOGLE_CAL_ID || '';
  const apiKey = process.env.GOOGLE_API_KEY || '';
  if(apiKey) console.log("FOUND API KEY")
  if(calendarId) console.log("FOUND CALENDAR ID")
  const fetcher = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}`, {cache: 'no-cache'});
  const calendar = await fetcher.json();
  const events = calendar.items as GoogleCalendarEvent[]; // You might want to filter or process events further
  const filteredEvents = events.filter((event) => {
    const eventDate = event.start.dateTime ? new Date(event.start.dateTime) : null;
    if(!eventDate || eventDate < new Date()) return false;
    return true
  })
  return NextResponse.json(filteredEvents || [])
}