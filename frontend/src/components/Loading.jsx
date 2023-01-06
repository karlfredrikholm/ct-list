import React from 'react';
import { GiMartini } from 'react-icons/gi';
import { LoadingAnimation } from './styled/Loading.styled';

const Loading = () => {
  return (
    <LoadingAnimation>
      <GiMartini />
    </LoadingAnimation>
  )
};

export default Loading;