import { Button } from 'antd'
import React, { useState } from 'react'
import HeadNavBar from '../components/HeadNavBar'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import yes18 from '../assets/img/yes18.jpg'
import no18 from '../assets/img/no18.jpg'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #ccc;
  border-radius: 10px;
  height: 100%;
  margin-top: 20px;
  overflow: auto; /* 或 overflow: auto; */
`;


const B = () => {
  let [isShow, setIsShow] = useState(false);
  let [content, setContent] = useState(false);

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: "#06cbee" }}>Hi, this is B page.</h2>
      <HeadNavBar />

      <p style={{ textAlign: 'center' }}>
        按道理点的是B的子页面，过来的应该显示B1或者B2才对啊，看鸡毛的 B页面 啊？
      </p>
      <p style={{ textAlign: 'center' }}>可能是有防沉迷机制。。。</p>
      <Button type="primary" danger onClick={() => {
        alert('点尼🐴呢，是让你点这个吗？')
        // alert('哎呀呀这个按钮有什么好点的嘛救命啊家人🆘')
      }}>要不你点点试试吧。。</Button>

      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <img
          src= {yes18}
          style={{ width: '100%', maxWidth: '300px' }}
          alt=""
          onClick={() => {
            setIsShow(true);
          }}
        ></img>
        <img
          src= {no18}
          style={{ width: '100%', maxWidth: '300px' }}
          border="0"
          onClick={() => {
            if (isShow) {
              setContent(true);
            } else {
              alert('干嘛点否啊，你干嘛啊？')
            }
          }}
        ></img>
        <br />
        <div>
          {content && <strong>我真服了啊谁让你点这里的，哪有爽完了你又想潇洒的走？醉了真是</strong>}
        </div>
      </div>

      <Div>
        {isShow &&
          <div>
            <Outlet /> <br /> <br />
            <i style={{ color: "purple" }}>你想问咋把内容再弄消失？像steam那样，欺骗。你再点一下 <strong style={{ fontSize: '90px' }} onClick={() => {
              setIsShow(false);
              setContent(false);
            }}>否</strong> 不就妥了</i>
          </div>
        }
      </Div>
    </div>
  )
}

export default B;
