import React from "react";
import classNames from 'classnames/bind';

import "components/DayListItem.scss"

export default function DayListItem(props) {

  const dayClass = classNames({"day-list__item": !(props.selected || props.spots === 0)}, {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  function formatSpots() {
    let spots;
    if (props.spots === 0) {
      spots = "no spots remaining";
    }

    if (props.spots === 1) {
      spots = "1 spot remaining";
    }

    if (props.spots > 1) {
      spots = `${props.spots} spots remaining`;
    } 

    return spots;
  }

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}