import React from 'react';
import { Link } from 'react-router-dom';

function Button({ text, type, to }) {
  const baseClass = "px-4 py-2 rounded-md h-fit";
  const primaryClass = "bg-PM text-SC hover:bg-AC hover:text-SC";
  const secondaryClass = "border border-SC text-SC hover:border-AC hover:text-AC";
  const specialClass = "border border-AC text-AC hover:border-PM hover:text-PM";

  const getClassNames = () => {
    switch (type) {
      case 'primary':
        return `${baseClass} ${primaryClass}`;
      case 'secondary':
        return `${baseClass} ${secondaryClass}`;
      case 'special':
        return `${baseClass} ${specialClass}`;
      default:
        return baseClass;
    }
  };

  if (to) {
    return (
      <Link to={to} className={getClassNames()}>
        {text}
      </Link>
    );
  }

  return (
    <button className={getClassNames()}>
      {text}
    </button>
  );
}

export default Button;
