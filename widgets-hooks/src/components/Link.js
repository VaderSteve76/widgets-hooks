import React from 'react';

const Link = ({ className, href, children}) => {
  const onClick = (e) => {
    e.preventDefault();
  };

  return  (
    <a className={className} onClick={onCLick} href={href}>{children}</a>
  );
};

export default Link;