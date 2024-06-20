import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id }) => {
  return (
    <div className="card">
      <Link target="_blank"to={`/project/${id}`}>
        <h4>Project {id}</h4>
        <p>Short description of project {id}...</p>
      </Link>
    </div>
  );
};

export default Card;
