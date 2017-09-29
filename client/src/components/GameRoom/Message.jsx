import React from 'react';

const Message = ({message}) => (
  <div className="message">
    <span className="message-username">{message.username}</span>
    <span className="message-text">{message.text}</span>
  </div>
);

export default Message;