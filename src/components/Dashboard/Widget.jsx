import React from "react";

const Widget = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Widget;
