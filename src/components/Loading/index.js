import React from 'react';
import styled from 'styled-components';

import Load from '../../assets/img/loading.png';

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoadingImage = styled.img`
  animation: loadAnimation 1.5s infinite ease-in-out;

  @keyframes loadAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(.7);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const LoadingText = styled.p`
  font-size: 1.1rem;
`;

function Loading() {
  return (
    <LoadingWrapper>
      <LoadingImage src={Load} alt="Load symbol" />
      <LoadingText>Carregando...</LoadingText>
    </LoadingWrapper>
  );
}

export default Loading;