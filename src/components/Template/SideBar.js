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
        <h2>Elijah (Yijiashun) Qi</h2>
        <p><a href="mailto:qiyijiashun@gmail.com">qiyijiashun@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Elijah Qi, a Software Engineer
        at <strong>TikTok (ByteDance)</strong> working
        on the Growth &amp; CRM Platform.
      </p>
      <p>
        I hold a Master&apos;s
        from <strong>UIUC</strong> and
        a Bachelor&apos;s (Highest Distinction)
        from <strong>UMich</strong>,
        both in Computer Science.
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
