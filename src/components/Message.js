import React from "react";
import DotProgress from "./DotProgress";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 200
};

const messageStyle = {
  color: "white"
};

const Message = ({ message }) => {
  const msg =
    message === "Searching for movies"
      ? <div>
          {message} <DotProgress />
        </div>
      : message;
  return (
    <div style={containerStyle}>
      <h3 style={messageStyle}>
        {msg}
      </h3>
    </div>
  );
};

export default Message;
