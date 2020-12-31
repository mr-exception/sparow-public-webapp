import React from "react";
import {Link} from 'react-router-dom';
const Component:React.FC = () => {

  return (
    <>
      <Link to="/dashboard">dashboard</Link> | 
      <Link to="/profile">profile</Link>
    </>
  );
};

export default Component;