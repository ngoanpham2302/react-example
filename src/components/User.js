import React from "react";
import "./User.css";

function User(props) {
  return (
    <div className="user">
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}
      </h2>

      <h2> Welcome To {props.bootcampName} </h2>
      <img src={props.image} width="350" height="350" />
    </div>
  );
}

export default User;
