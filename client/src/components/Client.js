import React from "react";
import Avatar from 'react-avatar';

function Client(props) {
  const { username } = props;

  return (
    <div className="client">
      <Avatar name={username} size={50} round="14px" />
      <span className="userName">{username}</span>
    </div>
  )
}

export default Client;
