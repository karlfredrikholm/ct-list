import React from 'react';
import { A, HR, P } from './styled/Misc.styled';
import { H2 } from './styled/Headings.styled';
import { AboutWrapper } from './styled/Wrappers.styled'

const About = () => {
  return (
    <AboutWrapper>
      <H2>About</H2>
      <div>
        <HR />
      </div>
      <P>
        <P>This was made as the final project of</P>
          Technigo Web Development Bootcamp, fall 2022.
      </P>
      <P>
        Made with the so-called MERN stack; <P>MongoDB, Express, React, Node.js</P>
      </P>
      <P>
        The idea was to make a simple recipes web app,
        <P>easy to navigate and view on your phone,</P>
        <P>while you are in the kitchen mixing it up.</P>
      </P>
      <P>
          The cocktails listed are all coming from the
          International Bartenders Association (IBA) official cocktail list.
        <P>Read more on <A href="https://iba-world.com">their own website</A>.</P>
      </P>
      <div>
        <HR />
      </div>
    </AboutWrapper>
  )
};

export default About;
