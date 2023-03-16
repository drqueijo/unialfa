import React from 'react'
import { FooterContainer } from './style'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

function index() {
  return (
    <FooterContainer>
        <FacebookOutlined />
        <InstagramOutlined />
        <TwitterOutlined />
    </FooterContainer>
  )
}

export default index