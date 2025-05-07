const dayStart = "07:30";
const dayEnd = "17:45";

const dayStartTime = convertStringToDate(dayStart);
const dayEndTime = convertStringToDate(dayEnd);

function convertStringToDate(time) {
  const [hours, minutes] = time.split(":");
  return new Date().setHours(hours, minutes, 0, 0);
}

function scheduleMeeting(startTime, durationMinutes) {
  console.log("Test: ", startTime, durationMinutes);

  const meetingStartTime = convertStringToDate(startTime);
  // //Set meetingEndTime using placeholder
  // let placeholder = new Date(meetingStartTime);
  // const meetingEndTime = placeholder.setMinutes(
  //   placeholder.getMinutes() + durationMinutes
  // );

  //Or create new Date from meetingStartTime number format
  const meetingEndTime = new Date(meetingStartTime).setMinutes(
    new Date(meetingStartTime).getMinutes() + durationMinutes
  );

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
