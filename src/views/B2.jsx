import { Button } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

const B2 = () => {
  const name = useStore(state => state.name);
  const age = useStore(state => state.age);
  const sex = useStore(state => state.sex);

  const setName = useStore(state => state.setName);
  const setAge = useStore(state => state.setAge);
  const setSex = useStore(state => state.setSex);
  
  const nameInputRef = useRef(null); // 创建ref对象并初始化为null
  const ageInputRef = useRef(null);
  const sexInputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(name);
    // console.log(age);
    // console.log(sex);
  });

  const clearAndFocusInput = (inputRef) => {
    inputRef.current.value = ''; // 清空输入框
    inputRef.current.focus(); // 聚焦输入框
  };

  return (
    <div>
      这里是B2，我单独把它分离出来了，要不然太乱。没什么意思，回家吧。 <br /> <br />
      但好像可以练习一下页面之间的信息传递

      <div>
        <p>请输入你的姓名：<input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={nameInputRef} />
        </p>
        <p>请输入你的年龄：<input value={age} type="text" onChange={(e) => setAge(e.target.value)} ref={ageInputRef} />
        </p>
        <p>请输入你的性别：<input value={sex} type="text" onChange={(e) => setSex(e.target.value)} ref={sexInputRef} />
        </p>
      </div>

      <Button type="primary" onClick={() => {
        navigate('/c');
        clearAndFocusInput(nameInputRef);
        clearAndFocusInput(ageInputRef);
        clearAndFocusInput(sexInputRef);
      }}>保存</Button>
    </div>
  );
};

export default B2;
