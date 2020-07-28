import React from 'react';

function ButtonLink({ className, href, children }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default ButtonLink;