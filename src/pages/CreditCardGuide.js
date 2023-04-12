import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';

const CreditCardGuide = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/credit-card-guide.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      }).catch(console.error);
  });

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="Credit Card Guide"
      description="Credit Card Guide"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/credit-card-guide">Credit Card Guide</Link></h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default CreditCardGuide;
