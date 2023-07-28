import React, {useEffect, useState} from 'react';
import { Layout } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';

const { Footer } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

type Props = {

};


const PageFooter: React.FC<Props> = () => {
  
  return (
    <Footer style={{ textAlign: 'center', fontWeight: 500, fontSize: 18, color: "white", backgroundColor: "darkcyan", display: 'flex', justifyContent: "space-between" }}>
    <div style={{paddingRight: 50}}>Created by Gayane Orlova ©2023</div>
    <Space>
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </Space>
  </Footer>

  )
}

export { PageFooter };

