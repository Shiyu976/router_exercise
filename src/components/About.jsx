import { Footer } from 'antd/es/layout/layout';
import React from 'react'
// css
import styled from 'styled-components'
import WebFooter from './WebFooter';
const Div = styled.div`
  display: flex; /* 将Div设置为Flex容器 */
  flex-direction: column; /* 垂直排列子元素 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  width: 100%;
  height: 100%;
  padding: 5px;
  margin-top: 0px;
`;

const About = () => {
    return (
        <div style={{backgroundColor: "#eee"}}>
            <h2 style={{ textAlign: 'center', color:"orange" }}>About page</h2>

            {/* 图片 div */}
            <Div>
                <div>
                    <a href="#" target="_blank" className="disabled-link">
                        <img className="ad_img" src="https://fans.91selfie.com/fans/1946000_1655028173.jpg" alt="Image 1" />
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank" className="disabled-link">
                        <img className="ad_img" src="https://fans.91selfie.com/fans/693836.gif" alt="Image 2" />
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank" className="disabled-link">
                        <img className="ad_img" src="https://fans.91selfie.com/fans/dafa.gif" alt="Image 3" />
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank" className="disabled-link">
                        <img className="ad_img" src="https://fans.91selfie.com/fans/2481e.gif" alt="Image 4" />
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank" className="disabled-link">
                        <img className="ad_img" src="https://fans.91selfie.com/fans/huacangku.gif" alt="Image 5" />
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank" className="disabled-link">
                        <img className="ad_img" src="https://fans.91selfie.com/fans/hb.gif" alt="Image 6" />
                    </a>
                </div>
            </Div>

            <WebFooter />
        </div>
    )
}

export default About
