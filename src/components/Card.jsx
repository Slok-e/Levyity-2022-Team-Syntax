import React from "react";

const Card = (props) => {
  return (
    <div className={`card grid w-96 bg-base-100 shadow-xl`}>
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
