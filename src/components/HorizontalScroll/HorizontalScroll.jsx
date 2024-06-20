import React from 'react';
import Panel from '../Panel/Panel';

const HorizontalScroll = () => {
  return (
    <div className="horizontal-scroll">
      <Panel title="Fullstack Development" id="fullstack" />
      <Panel title="Data Pipelines" id="data-pipelines" />
      <Panel title="Machine Learning" id="ml" />
      <Panel title="Open Source" id="opensource" />
    </div>
  );
};

export default HorizontalScroll;
