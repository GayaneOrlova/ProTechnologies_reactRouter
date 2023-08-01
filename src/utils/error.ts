import {message } from 'antd';

export const messagingOnError = (text?: string) => {
const messageText = text || "Error!"
  message.error(messageText);
};

