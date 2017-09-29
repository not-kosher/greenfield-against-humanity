import React from 'react';
import Message from './Message';

const MessageList = ({messages}) => (
  <div className="message-list">
    {messages.map(message =>
      <Message message={message} />
    )}
  </div>
);

export default MessageList;