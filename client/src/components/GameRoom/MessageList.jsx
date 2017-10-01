import React from 'react';
import Message from './Message';

const MessageList = ({messages}) => (
  <div className="message-list-container">
    <div className="message-list" id="message-list">
      {messages.map(message =>
        <Message message={message} />
      )}
    </div>
  </div>
);

export default MessageList;