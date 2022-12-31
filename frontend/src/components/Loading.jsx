import React from 'react';
import { GiMartini } from 'react-icons/gi';
import { LoadingAnimation } from './styled/Loading.styled';
import { NameP } from './styled/Misc.styled';

const Loading = () => {
  return (
    <LoadingAnimation>
      <GiMartini />
      <NameP>Loading</NameP>
    </LoadingAnimation>
  )
};

export default Loading;