import React from 'react';
import { HR } from './styled/elements/HR';
import { A } from './styled/elements/A';
import { H2 } from './styled/elements/Headings.styled';
import { P } from './styled/elements/P';
import { AboutWrapper } from './styled/Wrappers.styled'

const About = () => {
  return (
    <AboutWrapper>
      <H2>About</H2>
      <HR />
      <P>
        This was made as the final project of
        Technigo Web Development Bootcamp, fall 2022.
      </P>
      <P>
        Front-end made with React.js, styled components,
        client-side routing with React Router.
        Back-end made with Node.js/Express and MongoDB database.
      </P>
      <P>
        The cocktails listed are all coming from the
        International Bartenders Association (IBA), founded 1951.
        Read more on <A href="https://iba-world.com">their own website</A>
      </P>
      <HR />
    </AboutWrapper>
  )
};

export default About;
