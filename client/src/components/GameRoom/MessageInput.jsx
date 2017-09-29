import React from 'react';

const MessageInput = ({submitMessage}) => (
  <form action="#" className="message-input-form" onSubmit={submitMessage}>
    <input id="message-input" type="text" />
    <button>Send</button>
  </form>
);

export default MessageInput;