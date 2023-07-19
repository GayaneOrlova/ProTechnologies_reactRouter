// import "../Header/Header.css"
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Divider, Row } from 'antd';
// import { HeaderLogin } from "./HederLogin";

const style = { background: 'f4cf0f', padding: '8px 0' };

const PageHeader = () => {

  return (
    <>
      <Divider orientation="left"></Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <div style={style}><h2>Project and Technologies</h2></div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}><Link to='login'>
            <h2>Log in/Log out</h2>
            {/* <HeaderLogin/> */}
          </Link></div>
        </Col>
      </Row>

      {/* </div>
      </header> */}
    </>
  )
}

export { PageHeader };

