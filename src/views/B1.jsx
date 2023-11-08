import React from 'react';

const coolFontStyle = {
  fontFamily: 'cursive', // 你可以使用不同的字体名称
  fontSize: '24px', // 设置字体大小
  color: '#05e8dd', // 设置字体颜色
  fontWeight: 'bold', // 设置字体粗细
  textShadow: '2px 2px 4px rgba(239, 225, 28, 0.5)', // 添加文本阴影效果
  // 添加其他自定义样式，根据需要
};

const B1 = () => {
  return (
    <div style={coolFontStyle}>
      &nbsp;&nbsp;&nbsp; 嘿嘿对喽，这里就是B1页面的全部内容了。此为局部刷新，不刷新整个页面的前提下，只刷新局部内容。&nbsp;&nbsp;
    </div>
  );
};

export default B1;
