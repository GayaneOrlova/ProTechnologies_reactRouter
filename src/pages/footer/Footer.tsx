import React from 'react';
import { Layout, Space } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { FooterStyled } from './Footer.styled';

const { Footer } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

type Props = {

};

const PageFooter: React.FC<Props> = () => {
  return (
    <FooterStyled>
      <Footer className='page__footer'>
        <div className='title__footer'>Created by Gayane Orlova ©2023</div>
        <Space>
          <IconFont  className='contacts__footer' type="icon-facebook" />
          <IconFont type="icon-twitter" />
        </Space>
      </Footer>
    </FooterStyled>
  )
}

export { PageFooter };

