import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setUser } from "../store/userSlice";
import {Button, Form, Input, message } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";
import { postUser } from "../API/user.api";
import { AppRoutes } from "../utils/router/constants";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userError, setUserError] = useState(false)
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setUserError(false)
  };
  
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setUserError(false)
  };

  const onFinishFailed = () => {
    message.error('Wrong email or password!');
  };
  
  const onLogin = async (value: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await postUser(value);
      localStorage.setItem("access", response.data.tokens.access)
      dispatch(setUser(response.data.user))
      navigate ("/")
      
    } catch(er) {
      onFinishFailed()
      setUserError(true)
      console.log(er);
    }
  }
  
  return (
    <>
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ offset: 30 }}
          style={{ maxWidth: 600, marginLeft: "300px", marginTop: "50px"}}
          initialValues={{ remember: true }}
          onFinish={onLogin}
        >
          <Form.Item wrapperCol={{ offset: 23, span: 8 }}>
            <Link to={AppRoutes.home}>
              <CloseCircleOutlined style={{color: "darkcyan"}}/>
            </Link>
          </Form.Item>
          
          <Form.Item
            label="Email"
            name="email"
            validateStatus={userError ? "error" : "validating"}
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input value={email} onChange={onEmailChange}/>
          </Form.Item>
          
          <Form.Item
            label="Password"
            name="password"
            validateStatus={userError ? "error" : "validating"}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              value={password}
              allowClear
              onChange={onPasswordChange}
            />
          </Form.Item>
          
          <Form.Item wrapperCol={{ offset: 14, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ background: "darkcyan" }}>
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
 
export { Login };