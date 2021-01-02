import React from "react";
import {Link} from 'react-router-dom';
const Component:React.FC = () => {

  return (
    <p>
      <Link to="/dashboard">dashboard</Link> {'>'}
      <Link to="/profile">index</Link>
    </p>
  );
};

export default Component;