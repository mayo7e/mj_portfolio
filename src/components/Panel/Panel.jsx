import React from 'react';
import Card from '../Cards/Cards';

const Panel = ({ title, id }) => {
  return (
    <div className="panel" id={id}>
      <h3>{title}</h3>
      <div className="card-container">
        <Card id={`${id}-1`} />
        <Card id={`${id}-2`} />
        <Card id={`${id}-3`} />
      </div>
    </div>
  );
};

export default Panel;
