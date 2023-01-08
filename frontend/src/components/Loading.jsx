import React from 'react';
import { GiMartini } from 'react-icons/gi';
import { LoadingAnimation } from './styled/Loading.styled';
// import { P } from './styled/Misc.styled';

const Loading = () => {
  return (
    <LoadingAnimation>
      <GiMartini />
      {/* <P>Loading</P> */}
    </LoadingAnimation>
  )
};

export default Loading;