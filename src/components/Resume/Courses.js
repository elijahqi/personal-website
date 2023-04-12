import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) => courses.map((school) => (
  <React.Fragment key={`${school.title}-header`}>
    <h4>{school.title}</h4>
    {school.courses.map((course) => (
      <Course
        data={course}
        key={`${school.title}-${course.title}`}
        last={false}
      />
    ))}
  </React.Fragment>
));

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Selected Courses</h3>
    </div>
    <ul className="course-list">{getRows(data)}</ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
