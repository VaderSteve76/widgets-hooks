import React, { useEffect, useState } from 'react';


const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('lang or text');
  }, [language, text]);

  return <div />;
};

export default Convert;