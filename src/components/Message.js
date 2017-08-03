import React from "react";

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
  return (
    <div style={containerStyle}>
      <h3 style={messageStyle}>
        {message}
      </h3>
    </div>
  );
};

export default Message;
