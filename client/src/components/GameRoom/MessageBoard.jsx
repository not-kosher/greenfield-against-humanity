import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const MessageBoard = ({messages, submitMessage}) => {
  //eventually conditional?
  return (
    <div className="message-board">
      <MessageList messages={messages} />
      <MessageInput submitMessage={submitMessage} />
    </div>
  );
};

export default MessageBoard;