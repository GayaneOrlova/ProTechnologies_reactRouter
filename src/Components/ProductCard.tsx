import React from "react";
import { Link } from "react-router-dom";

import { EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

const ProductCard = () => {

  return (
    <>
    <Link to='project/:id/'>
      <Card
        style={{ width: 300 }}
        cover={<img src="https://tuhub.ru/sites/default/files/2018-02/1-B6I9Z__mLkkiSShRLR4iQ.png" alt="ReactRedux"/>}
        actions={[ <EditOutlined key="edit" />,]}>
      <Meta title="Project name:" description="Technologies used:"/>
      </Card>
    </Link>
    </>
  )
}

export { ProductCard };