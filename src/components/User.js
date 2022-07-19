import React from "react";

function User(props) {
  return (
    <div className="text-center">
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}
      </h2>

      <h2> Welcome To {props.bootcampName} </h2>
      <img src={props.image} width="350" height="350" alt="user-avatar" />
    </div>
  );
}

export default User;
