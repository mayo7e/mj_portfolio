import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  return (
    <div className="project-details-page">
      <h2>Project Details - {id}</h2>
      <p>Details about project {id}...</p>
    </div>
  );
};

export default ProjectDetailsPage;
