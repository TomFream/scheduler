export function getAppointmentsForDay(state, day) {
  let appointmentsForDay;
  const appointmentArray = [];

  for (const d of state.days) {
    if (d.name === day) {
      appointmentsForDay = d.appointments;
    } 
  }

  if (!appointmentsForDay) {
    return [];
  } 

  for (const index in state.appointments) {
    if (appointmentsForDay.includes(state.appointments[index].id)) {
      appointmentArray.push(state.appointments[index]);
    }
  }
  
  return appointmentArray;
};

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }

  return {...interview, interviewer: state.interviewers[interview.interviewer]};
};