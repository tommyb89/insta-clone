import React from "react";
import "./Stats.scss";

const Stats = (props) => {
  const { count, name } = props;

  return (
    <div className="stats">
      <p className="stats__count">{count}</p>
      <p className="stats__name">{name}</p>
    </div>
  );
};

export default Stats;
