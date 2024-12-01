import React from "react";
import "../css/UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-card" style={props.style}>
      <p>{props.name}</p>
      <img id="profile-pic" src={props.img} />
      <p>{props.desc}</p>
    </div>
  );
};

export default UserCard;
