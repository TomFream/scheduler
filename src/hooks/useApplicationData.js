import { useEffect, useState } from "react";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    const daysURL = "/api/days";
    const appointmentsURL = "/api/appointments";
    const interviewersURL = "/api/interviewers";
    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewersURL),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function bookInterview(id, interview) {
    // Create a new appointment object based on the given appointment id and interview object created in teh save function
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    // Update the appointments object with the new appointment
    const appointments = { ...state.appointments, [id]: appointment };
    const url = `/api/appointments/${id}`;
    return axios.put(url, appointment).then((res) => {
      // setState to include the updated appointments object
      setState({ ...state, appointments });
      spotsRemaining({ ...state, appointments });
    });
  }

  function cancelInterview(id) {
    const appointment = { ...state.appointments[id], interview: null };
    const appointments = { ...state.appointments, [id]: appointment };

    const url = `/api/appointments/${id}`;
    return axios.delete(url, appointment).then((res) => {
      setState((prevState) => ({ ...prevState, appointments }));

      spotsRemaining({ ...state, appointments });
    });
  }

  function spotsRemaining(newState) {
    let spots = 0;
    const appointments = getAppointmentsForDay(newState, newState.day);

    for (const appointment of appointments) {
      if (appointment.interview === null) {
        spots++;
      }
    }

    const days = newState.days.map((day) => {
      if (day.name === newState.day) {
        day.spots = spots;
      }
      return day;
    });

    setState((prevState) => ({ ...prevState, days }));
  }

  return { state, setDay, bookInterview, cancelInterview, spotsRemaining };
}
