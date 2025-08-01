import React from 'react';
import Title from '../Text/Title';
import MatrixText from '../Text/MatrixText';
import Subtitle from '../Text/Subtitle';

function MainTitleContainer() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <Title />
      <MatrixText />
      <Subtitle />
    </div>
  );
}

export default MainTitleContainer;
