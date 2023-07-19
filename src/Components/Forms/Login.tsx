import React, {FormEvent, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useState } from 'react';
// import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import useAuthContext from './useAuthContext.js'

import { Button, Form, Input } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";
import { postUser } from "../../API/ProTech.api";
import { User } from "../../store/userSlice"

// type Props = {
//   onFormSubmit: (v: string) => void;
// };

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  console.log(email)

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLogin = async (value: User) => {
    try {
      const response = await postUser(value);
      
      localStorage.setItem("token", response.data.tokens.access)
      
      console.log(response);
      // dispatch(addItem(response.data));
      // console.log(response)
    } catch(er) {
      console.log(er);
    }
  }


  return (
    <>
      <div>
        <Form
          // name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ offset: 30 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onLogin}
        // onFinishFailed={onFinishFailed}
        >
          <Form.Item wrapperCol={{ offset: 23, span: 8 }}>
            <Link to='/'>
              <CloseCircleOutlined />
            </Link>
          </Form.Item>
        
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            {/* <Input value={email} onChange={(e) => setEmail(e.target.value)}/> */}
            <Input value={email} onChange={onEmailChange}/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
            value={password}
            onChange={onPasswordChange}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export { Login };