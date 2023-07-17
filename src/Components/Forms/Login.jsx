import React from "react";
import { Link } from "react-router-dom";

import { Button, Form, Input } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";

const Login = () => {

  return (
    <>
      <div>
        <Form
          // name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ offset: 30 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
          <Form.Item wrapperCol={{ offset: 23, span: 8 }}>
            <Link to='/'>
              <CloseCircleOutlined />
            </Link>
          </Form.Item>
        
          <Form.Item
            label="Username"
            name="username"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
          >
            <Input.Password />
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