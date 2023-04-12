import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Elijah (Yijiashun)&apos;Qi</h2>
        <p><a href="mailto:elijahqi@umich.edu">elijahqi@umich.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Elijah Qi, currently pursuing a Bachelor&apos;s degree in Computer Science and Data Science at the <strong>University of Michigan</strong>. I&apos;m passionate about programming and problem-solving, so that I enjoy doing <a href="https://leetcode.com/elijahqi/" target="_blank" rel="noreferrer">LeetCode</a> challenges for fun!
      </p>
      <p>
        My interests include traveling around the world and experiencing different cultures.
        I am particularly interested in full-stack development and am currently seeking a
        full-time job starting in <strong>Fall 2024</strong>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Elijah&apos;Qi <Link to="/">elijahqi.github.io/personal-website</Link>.</p>
    </section>
  </section>
);

export default SideBar;
