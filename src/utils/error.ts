import React, {useState} from "react";
import {message } from 'antd';

export const onFinishFailed = () => {
  message.error("Error!");
};

