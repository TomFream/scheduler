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
  // console.log("Appointment array from selector: ", appointmentArray)
  
  return appointmentArray;
};

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }
  
  return {...interview, interviewer: state.interviewers[interview.interviewer]};
};

export function getInterviewerForDay(state, day) {
  let interviewersForDay;
  const interviewerArray = [];

  for (const d of state.days) {
    if (d.name === day) {
      interviewersForDay = d.interviewers;
    } 
  }

  if (!interviewersForDay) {
    return [];
  } 

  for (const index in state.interviewers) {
    if (interviewersForDay.includes(state.interviewers[index].id)) {
      interviewerArray.push(state.interviewers[index]);
    }
  }
  
  return interviewerArray;
}