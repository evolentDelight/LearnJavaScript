const dayStart = "07:30";
const dayEnd = "17:45";

const dayStartTime = convertStringToDate(dayStart);
const dayEndTime = convertStringToDate(dayEnd);

function convertStringToDate(time) {
  const [hours, minutes] = time.split(":");
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function scheduleMeeting(startTime, durationMinutes) {
  console.log("Test: ", startTime, durationMinutes);

  const meetingStartTime = convertStringToDate(startTime);

  const meetingEndTime = new Date(meetingStartTime);
  meetingEndTime.setMinutes(meetingEndTime.getMinutes() + durationMinutes);

  if (meetingStartTime >= dayStartTime) {
    //If true, then it is a viable meeting start time
    if (meetingEndTime <= dayEndTime) {
      console.log("true\n");
      return true;
    }
  }
  console.log("false\n");
  return false;
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
