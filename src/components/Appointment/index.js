import React from "react";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";

import useVisualMode from "../../hooks/useVisualMode";

import "components/Appointment/styles.scss";
import Form from "./Form";


export default function Appointment(props)  {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    transition(SAVING)
    const interview = {
      student: name,
      interviewer
    };

    props.bookInterview(props.id, interview)
      .then (() => {
        transition(SHOW);
      })
      .catch((err) => {
        transition(ERROR_SAVE, true)
      })
  }

  function confirm() {
    transition(DELETING, true)

    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch((err) => {
        transition(ERROR_DELETE, true)
      })
  }


  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => (transition(CREATE))} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => (transition(CONFIRM))}
          onEdit={() => (transition(EDIT))}
        />
      )}
      {mode === CREATE && 
        <Form 
          interviewers={props.interviewers}
          onCancel={() => (transition(EMPTY))}
          onSave={save}
        />
      }
      {mode === EDIT &&
        <Form 
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={() => (transition(SHOW))}
          onSave={save}
        />
      }
      {mode === SAVING && 
        <Status
          message={SAVING}
        />
      }
      {mode === DELETING &&
        <Status 
          message={DELETING}
        />
      }
      {mode === CONFIRM &&
      <Confirm 
        message={"Are you sure you want to delete appointment?"}
        onCancel={() => (transition(SHOW))}
        onConfirm={confirm}
      />}
      {mode === ERROR_DELETE && 
      <Error 
        message={"Error deleting appointment"}
        onClose={() => (transition(SHOW))}
      /> 
      }
      {mode === ERROR_SAVE &&
        <Error 
          message={"Error saving appointment"}
          onClose={() => (transition(CREATE))}
        />
      }
    </article>
  )
}