// import "../Header/Header.css"
import React from 'react';
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
import {LoginOutlined, LogoutOutlined} from '@ant-design/icons';

const PageHeader = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = useAppSelector(state => state.user);

  const logoutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(logout())
    localStorage.removeItem("accessToken");
    navigate("/")
  }

  return (
    <>
      <Row 
      //  gutter={16}
       style={{
        // position: 'sticky',
        // top: 0,
        // zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: "darkcyan",
        paddingLeft: "50px",
        paddingRight: "30px",
      }}
      >
        <Col className="gutter-row" span={16}>
          <h2 style={{color: 'white'}}>PROJECTS  AND  TECHNOLOGIES</h2>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            {!auth.user.email ?
              <Link to='login'>
                <Button icon={<LoginOutlined style={{color: "darkcyan"}}/>} style={{color: "darkcyan"}}>LOGIN</Button>
              </Link>
              :
              <div>
                <Button icon={<UserOutlined />}>PROFILE</Button>
                <a href='#' onClick={logoutHandler}>
                {/* a - hmmmm */}
                <Button icon={<LogoutOutlined style={{color: "darkcyan"}}/>} style={{color: "darkcyan"}}>LOGOUT</Button>
                </a>
              </div>
            }

          </div>
        </Col>
      </Row>
    </>
  )
}

export { PageHeader };

