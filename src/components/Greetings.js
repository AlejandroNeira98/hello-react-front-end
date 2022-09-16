import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const Greetings = () => {
  const greeting = useSelector((state) => state.greeting, shallowEqual);

  return (
    <h1>
      {greeting}
    </h1>
  );
};

export default Greetings;