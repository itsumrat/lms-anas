import React from 'react';
import './right-panel.styles.scss';
import { Link } from 'react-router-dom';

function RightPanel() {
  return (
    <div className="setting-right-panel d-none d-md-block">
      <Link to={`/courseStudents`}>
        <i
          className="fa fa-television"
          aria-hidden="true"
        ></i>
      </Link>
      <Link to={`/courseStudents`}>
        <i
          className="fa fa-life-ring"
          aria-hidden="true"
        ></i>
      </Link>
      <Link to={`/courseStudents`}>
        <i className="fa fa-wrench" aria-hidden="true"></i>
      </Link>
      <Link to={`/courseStudents`}>
        <i
          className="fa fa-shopping-cart"
          aria-hidden="true"
        ></i>
      </Link>
      <Link to={`/courseStudents`}>
        <i className="fa fa-mobile" aria-hidden="true"></i>
      </Link>
    </div>
  );
}

export default RightPanel;
