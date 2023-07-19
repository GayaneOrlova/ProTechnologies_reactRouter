import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

const { Item } = Menu;

export const HeaderLogin = () => {
  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      <Item key="/host">
        <Link to="/host">
          <Icon type="home" />
          Host
        </Link>
      </Item>
      <Item key="/login">
        <Link to="/login">
          <Button type="primary">Log in</Button>
        </Link>
      </Item>
    </Menu>
  );
};