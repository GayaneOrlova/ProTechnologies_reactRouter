import React from 'react';
import {
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Button } from 'antd';

import { AppRoutes } from '../../utils/router/constants';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { logout } from "../../store/slices/userSlice";

import { HeaderStyled } from './Header.styled';

const { Header } = Layout;

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
    <HeaderStyled>
      <Header className='page__header'>
        <Link to={AppRoutes.home}>
          <h2 className='text__header'>
            <FileProtectOutlined />
            PROJECTS  AND  TECHNOLOGIES
          </h2>
        </Link>
        <div>
          {!auth.user.email ? (
            <Link to={AppRoutes.login}>
              <Button className='button__header' icon={<LoginOutlined />}>
                LOGIN
              </Button>
            </Link>
          ) : (
            <div className='button__header'>
              <Link to='#'>
                <Button className='button__header' icon={<UserOutlined />}>
                  PROFILE
                </Button>
              </Link>
              <Link to={AppRoutes.home}>
                <Button
                  className='button__header'
                  onClick={logoutHandler}
                  icon={<LogoutOutlined className='button__header' />}
                >
                  LOGOUT
                </Button>
              </Link>
            </div>
          )
          }
        </div>
      </Header>
    </HeaderStyled>
  )
}

export { PageHeader };

