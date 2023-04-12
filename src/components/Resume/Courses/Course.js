import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data, last }) => (
  <li className="course-container">
    <h4 className="course-number">{data.number ? `${data.number}:` : ''}</h4>
    <p className="course-name">{data.title}</p>
    {data.grade && <p className="course-grade">Grade: {data.grade}</p>}
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.string,
    title: PropTypes.string.isRequired,
    grade: PropTypes.string,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
