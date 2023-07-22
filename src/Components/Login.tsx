import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../Store/hooks";
import { setUser } from "../Store/userSlice";
import { Button, Form, Input } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";
import { postUser } from "../API/user.api";
import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../Store/hooks";


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLogin = async (value: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await postUser(value);

      localStorage.setItem("accessToken", response.data.tokens.access)
      
      dispatch(setUser(response.data.user))
      navigate ("/")
    } catch(er) {
      console.log(er);
    }
  }
 
//  const auth = useAppSelector(state => state.user.);
// console.log(auth)
  
  return (
    <>
      <div>
        <Form
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
            {/* <LoginOutlined/> */}
            Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
 
export { Login };