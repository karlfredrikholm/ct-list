import React from 'react';
import { H1, H2 } from './styled/Headings.styled';
import Menu from './Nav';

const NotFound = () => {
  return (
    <>
      <Menu />
      <div style={{ margin: '0 auto', paddingTop: '10rem', borderBottom: '7px solid RosyBrown' }}>
        <H1 className="err">Error 404</H1>
        <H2 className="err">Page Not Found</H2>
      </div>
    </>
  )
};

export default NotFound;
