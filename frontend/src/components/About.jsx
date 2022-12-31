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
        <p>This was made as the final project of </p>
        Technigo Web Development Bootcamp, fall 2022.
      </P>
      <P>
        Made with the so-called MERN stack; <p>MongoDB, Express.js, React.js, Node.js</p>
      </P>
      <P>
        The idea was to make a simple recipes web app,
        <p>easy to view and navigate on small screen devices,</p>
        <p>while you&apos;re in the kitchen, mixing it up.</p>
      </P>
      <P>
          The cocktails listed are all coming from the
          International Bartenders Association&apos;s (IBA) official cocktail list.
        <p>Read more on <A href="https://iba-world.com" target="_blank" rel="noopener noreferrer">their website</A>.</p>
      </P>
      <div>
        <HR />
      </div>
    </AboutWrapper>
  )
};

export default About;
