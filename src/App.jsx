import React from 'react'
/* 使用ANTD组件库 */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
/* 导入组件 */
import A from './views/A';
import B from './views/B';
import B1 from './views/B1';
import B2 from './views/B2';
import C from './views/C';
import WebFooter from './components/WebFooter';
import NotFound from './components/NotFound/NotFound';
import HeadNavBar from './components/HeadNavBar';
/* css */
import styled from 'styled-components';
const Div = styled.div`
  margin: 0 auto;
  width: 85%;
  height: 100vw;
  background-color: #eee;
  border-radius: 10px;
  border: 2px solid #700a0a;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
  color: #275dc1;
  overflow: auto;
`;




const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <h1 style={{ textAlign: 'center', color: 'pink' }}>Router_Exercise</h1> <br />
      <h3 style={{ textAlign: 'center', color: 'pink' }}>欢迎逛逛其他页面</h3>
      <ul>
        <li><a href="https://www.logantest.site/weather/">此为天气小网页，接口为海外接口，故仅支持部分城市搜索且必须英文搜索</a></li>
        <li><a href="https://www.logantest.site/movie/">此为电影小网页，仅支持英文搜索，不支持点击噢</a></li>
      </ul>
      <HeadNavBar />

      <Div>
        This is Index page (也就是首页). <br />
        <p>
          在一个寒冷的夜晚，雨点敲击着窗户，风呼啸着在树林中呼啸。小镇的人们都害怕这个特殊的夜晚，因为传说中，在这个夜晚，一个幽灵故事变得现实。
          </p>

          <p>故事发生在一座乡村别墅，这座别墅位于树林深处，远离城市的喧嚣。有一对年轻夫妇，他们刚刚搬到这个别墅，想要逃离城市生活，寻找宁静。然而，他们不知道，这座别墅隐藏着一段可怕的历史。</p>

          <p>第一个晚上，当夫妇俩正准备入睡时，他们听到了奇怪的声音。那是一种低沉的哭泣声，似乎是从地下传来。他们试图忽略它，认为可能是风声或者别的什么，但声音越来越清晰，越来越威胁。</p>

          <p>第二天早上，夫妇俩决定调查声音的来源。他们打开地下室的门，只见一个黑暗的通道延伸到未知的深处。他们下去时，感到一股寒意，空气中弥漫着令人不安的气味。</p>

          <p>在地下室的角落里，他们发现了一个古老的书，书上写满了怪异的符号和咒语。他们尝试解读，但随着每个字的翻译，他们感到愈发不安。书中记载了一个邪恶的实体，被囚禁在地下已经几个世纪，但它渴望被释放。</p>

          <p>当夜晚再次降临，那个低沉的哭泣声再次响起，这次更为响亮。夫妇俩开始感到自己不再孤单，他们可以感受到一种邪恶的存在在四周环绕。恐惧充斥了整个别墅，他们明白他们唤醒了某种可怕的力量。</p>

          <p>接下来的几天，恶梦不断，夫妇俩开始失去理智。他们试图逃离这个诅咒的地方，但似乎无论他们走到哪里，那个邪恶的存在都在追逐着他们。他们陷入了疯狂，最终被这个邪恶的实体吞噬。</p>

          <p>从那以后，那座别墅成为了小镇的诅咒之地，没有人再敢接近。人们说，每当雨夜降临，他们还能听到那个低沉的哭泣声，提醒他们这个可怕的故事，并警告他们永远不要探索那个别墅的地下室。</p>

        
      </Div>

      <WebFooter />
    </ConfigProvider>
  )
}

export default App