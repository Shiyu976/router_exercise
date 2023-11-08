import React from 'react';
import useStore from '../store';
import styled from 'styled-components';
import { Button, Spin } from 'antd';
import WebFooter from '../components/WebFooter';
import { useNavigate } from 'react-router-dom';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border: 2px solid #333;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
`;
const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  font-size: 16px;
`;
const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;
const InfoValue = styled.span`
  color: #0073e6;
`;

const C = () => {
  const name = useStore(state => state.name);
  const age = useStore(state => state.age);
  const sex = useStore(state => state.sex);

  const navigate = useNavigate();
  const loading = true;

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>This is C page</h2>
      <InfoContainer>
        <InfoItem>
          <InfoLabel>Name:</InfoLabel>
          <InfoValue>{name}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Age:</InfoLabel>
          <InfoValue>{age}</InfoValue>
        </InfoItem>
        <InfoItem>
        <InfoLabel>Sex:</InfoLabel>
          {loading ? ( // 如果loading为true，显示加载状态的圆圈
            <Spin size="medium" />
          ) : (
            <InfoValue>加载失败</InfoValue>
          )}
        </InfoItem>
      </InfoContainer>

      <Button onClick={()=>{
        navigate('/b2');
      }}>Back to B2</Button> &nbsp; &nbsp; <Button onClick={()=>{navigate('/')}}>Home</Button>

      <WebFooter />
    </div>

  );
};

export default C;
