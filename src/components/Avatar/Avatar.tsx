import React from 'react';

import './Avatar.css';

type AvatarProps = {
  src: string;
  name: string;
};

const Avatar = ({src, name}: AvatarProps) => {
  console.log('src :', src);
  console.log('name :', name);
  console.log('getInitials(name) :', getInitials(name));

  return (
    <div>
      {src ? (
        <img title={name} alt={name} src={src} className="Avatar-image" />
      ) : (
        <span title={name}>{getInitials(name)}</span>
      )}
    </div>
  );
};

function getInitials(firstAndLast: string) {
  return (
    firstAndLast &&
    firstAndLast
      .split(' ')
      .map(name => name[0])
      .join('')
  );
}

export default Avatar;
