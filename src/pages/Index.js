import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Elijah Qi's personal website. Software Engineer at TikTok (ByteDance) working on Growth & CRM Platform. "
    + 'UIUC M.S. and UMich B.S. in Computer Science. Passionate about scalable systems, AI agents, and data-driven growth.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            Template based on <a href="https://html5up.net/future-imperfect" target="_blank" rel="noreferrer">Future Imperfect</a> by <a href="https://github.com/ajlkn" target="_blank" rel="noreferrer">ajlkn</a>.
          </p>

        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/elijahqi/personal-website">here</a>.</p>
    </article>
    <article className="post" id="courses">
      <header>
        <div className="title">
          <h2><Link to="/courses">School Courses</Link></h2>
        </div>
      </header>
      <h3>Computer Science Courses:</h3>
      <ul>
        <li>EECS 201: Computer Science Pragmatics</li>
        <li>EECS 203: Discrete Mathematics</li>
        <li>EECS 280: Programming and Data Structures in C++</li>
        <li>EECS 281: Data Structures and Algorithms</li>
        <li>EECS 370: Computer Architecture</li>
        <li>EECS 388: Computer Security</li>
        <li>EECS 481: Software Engineering</li>
        <li>EECS 482: Operating Systems</li>
        <li>EECS 485: Web Systems</li>
        <li>EECS 489: Computer Networks</li>
      </ul>
      <h3>Other Courses:</h3>
      <ul>
        <li>MATH 215: Calculus III</li>
        <li>MATH 214: Applied Linear Algebra</li>
        <li>MATH 425: Probability Theory</li>
        <li>STATS 401: Applied Statistical Methods II</li>
        <li>STATS 413: Applied Regression Analysis</li>
      </ul>
    </article>
  </Main>
);

export default Index;
