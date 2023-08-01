import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../../api/user.api";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/slices/userSlice";
import {Button, Form, Input, message } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";
import { AppRoutes } from "../../utils/router/constants";
import { LoginStyled } from "./Login.styled";
import { messagingOnError } from "../../utils/error";

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
      messagingOnError()
      setUserError(true)
      console.log(er);
    }
  }
  
  return (
    <LoginStyled>
      <Form
        className="form__login"
        labelCol={{ span: 8 }}
        wrapperCol={{ offset: 30 }}
        initialValues={{ remember: true }}
        onFinish={onLogin}
      >
        <Form.Item wrapperCol={{ offset: 23, span: 8 }}>
          <Link to={AppRoutes.home}>
            <CloseCircleOutlined className="close__button" />
          </Link>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          validateStatus={userError ? "error" : "validating"}
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input value={email} onChange={onEmailChange} />
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
          <Button type="primary" htmlType="submit" className="login__button">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </LoginStyled>
  )
}
 
export { Login };