import React from 'react';

const MessageInput = ({submitMessage}) => (
  <form action="#" className="message-input-form" onSubmit={submitMessage}>
    <input className="message-input" id="message-input" type="text" placeholder='Send a message'/>
    <button className="message-input-button">Send</button>
  </form>
);

export default MessageInput;