import React from "react";
import "./Highlights.scss";

const Highlight = (props) => {
  const { highlights } = props;

  const highlightsList = highlights.map((highlight, i) => {
    return (
      <div className="story" key={i}>
        <img className="story__img" src={highlight.imgSrc} alt="" />
        <p className="story__title">{highlight.title}</p>
      </div>
    );
  });
  return <div className="profile__stories">{highlightsList}</div>;
};

export default Highlight;
