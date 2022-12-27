import React from 'react';
import { AboutContainer } from './styled/Containers.styled';

const About = () => {
  return (
    <AboutContainer>
      <hr />
      <h4>About</h4>
      <p>
        This was made as the final project of
        Technigo Web Development Bootcamp, fall 2022.
      </p>
      <p>
        Front-end made with React.js, styled components,
        client-side routing with React Router.
        Back-end made with Node.js/Express and MongoDB database.
      </p>
      <p>
        The cocktails listed are all selected by the
        International Bartenders Association (IBA), founded 1951.
        Read more on <a href="https://iba-world.com">their own website</a>
      </p>
      <hr />
    </AboutContainer>
  )
};

export default About;
