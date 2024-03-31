interface GoogleCalendarEvent {
  kind: "calendar#event";
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: string; // datetime
  updated: string; // datetime
  summary: string;
  description: string;
  location: string;
  colorId: string;
  creator: GCalEventPerson;
  organizer: GCalEventPerson;
  start: GCalEventDateTime;
  end: GCalEventDateTime;
  endTimeUnspecified: boolean;
  recurrence: string[];
  recurringEventId: string;
  originalStartTime: GCalEventDateTime;
  transparency: string;
  visibility: string;
  iCalUID: string;
  sequence: number; // integer
  attendees: GCalEventAttendee[];
  attendeesOmitted: boolean;
  extendedProperties: GCalExtendedProperties;
  hangoutLink: string;
  conferenceData: GCalConferenceData;
  gadget?: GCalEventGadget;
  anyoneCanAddSelf: boolean;
  guestsCanInviteOthers: boolean;
  guestsCanModify: boolean;
  guestsCanSeeOtherGuests: boolean;
  privateCopy: boolean;
  locked: boolean;
  reminders: GCalEventReminders;
  source?: GCalEventSource;
  workingLocationProperties?: GCalWorkingLocationProperties;
  outOfOfficeProperties?: GCalOutOfOfficeProperties;
  focusTimeProperties?: GCalFocusTimeProperties;
  attachments: GCalEventAttachment[];
  eventType: string;
}

interface GCalEventPerson {
  id: string;
  email: string;
  displayName: string;
  self: boolean;
}

interface GCalEventDateTime {
  date?: string; // date
  dateTime?: string; // datetime
  timeZone?: string;
}

interface GCalEventAttendee {
  id: string;
  email: string;
  displayName: string;
  organizer: boolean;
  self: boolean;
  resource: boolean;
  optional: boolean;
  responseStatus: string;
  comment: string;
  additionalGuests: number; // integer
}

interface GCalExtendedProperties {
  private: Record<string, string>;
  shared: Record<string, string>;
}

interface GCalConferenceData {
  createRequest: GCalCreateRequest;
  entryPoints: GCalEntryPoint[];
  conferenceSolution: GCalConferenceSolution;
  conferenceId: string;
  signature: string;
  notes: string;
}

interface GCalCreateRequest {
  requestId: string;
  conferenceSolutionKey: { type: string };
  status: { statusCode: string };
}

interface GCalEntryPoint {
  entryPointType: string;
  uri: string;
  label: string;
  pin?: string;
  accessCode?: string;
  meetingCode?: string;
  passcode?: string;
  password?: string;
}

interface GCalConferenceSolution {
  key: { type: string };
  name: string;
  iconUri: string;
}

interface GCalEventGadget {
  type: string;
  title: string;
  link: string;
  iconLink: string;
  width: number; // integer
  height: number; // integer
  display: string;
  preferences: Record<string, string>;
}

interface GCalEventReminders {
  useDefault: boolean;
  overrides: GCalReminderOverride[];
}

interface GCalReminderOverride {
  method: string;
  minutes: number; // integer
}

interface GCalEventSource {
  url: string;
  title: string;
}

interface GCalWorkingLocationProperties {
  type: string;
  homeOffice?: any; // Use appropriate type or interface
  customLocation?: {
    label: string;
  };
  officeLocation?: {
    buildingId: string;
    floorId: string;
    floorSectionId: string;
    deskId: string;
    label: string;
  };
}

interface GCalOutOfOfficeProperties {
  autoDeclineMode: string;
  declineMessage: string;
}

interface GCalFocusTimeProperties {
  autoDeclineMode: string;
  declineMessage: string;
  chatStatus: string;
}

interface GCalEventAttachment {
  fileUrl: string;
  title: string;
  mimeType: string;
  iconLink: string;
  fileId: string;
}
