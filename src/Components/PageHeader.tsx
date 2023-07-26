// import "../Header/Header.css"
import React, { EventHandler, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Col, Divider, Row } from 'antd';

import { useAppSelector } from '../Store/hooks';
import store from '../Store/store';
import { Login } from './Login';
import userSlice from '../Store/userSlice';
import { User } from "../Store/userSlice";
import { useState } from 'react';
import { useAppDispatch } from '../Store/hooks';
import { logout } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";

import { UserOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import { LoginOutlined, LogoutOutlined, FileProtectOutlined } from '@ant-design/icons';
import { AnchorButtonProps } from 'antd/es/button/button';
import { ButtonType } from 'antd/es/button';

const style = { color: "darkcyan" };

const PageHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useAppSelector(state => state.user);

  const logoutHandler = () => {
    dispatch(logout())
    localStorage.removeItem("access");
    navigate("/")
  }

  return (
    <>
      <Row
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: "darkcyan",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Col className="gutter-row" span={16}>

          <h2 style={{ color: 'white' }}><FileProtectOutlined style={{ paddingRight: "10px" }} />PROJECTS  AND  TECHNOLOGIES</h2>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={{ textAlign: "end" }}>
            {!auth.user.email ? (
              <Link to='login'>
                <Button icon={<LoginOutlined style={style} />} style={style}>LOGIN</Button>
              </Link>
            ) : (
              <div style={style}>
                <Link to='#'>
                  <Button
                    style={{ marginRight: "10px" }}
                    icon={<UserOutlined />}
                  >
                    PROFILE
                  </Button>
                </Link>
                <Link to="#">
                  <Button onClick={logoutHandler} icon={<LogoutOutlined style={style} />} style={style} >LOGOUT</Button>
                </Link>
              </div>
            )
            }
          </div>
        </Col>
      </Row>
    </>
  )
}

export { PageHeader };

