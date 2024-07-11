// ComponentA.js
import React from 'react';
import Topbar from './Topbar';

const Main = ({ Component }) => {
  return (
    <div>
      <Topbar/>
      <Component />
    </div>
  );
};

export default Main;
