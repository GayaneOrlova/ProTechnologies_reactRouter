// import "../Header/Header.css"
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Divider, Row } from 'antd';
const style = { background: 'f4cf0f', padding: '8px 0' };

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
import { Button } from 'antd';



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
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <div style={style}><h2>Project and Technologies</h2></div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>

            {!auth.user.email ?
              <Link to='login'>
                <h2>Log in</h2>
              </Link>
              :
              <div>
                <Button
                  type="primary"
                  icon={<UserOutlined />}
                // onClick={() => enterLoading(1)}
                >
                  PROFILE
                </Button>

                <a href='#' onClick={logoutHandler}>
                  Logout
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

