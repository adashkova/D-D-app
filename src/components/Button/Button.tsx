import React, { FC } from 'react';

interface IButtonProps {
  logo: string;
  onClick: (e: React.MouseEvent) => void;
}

const Button: FC<IButtonProps> = ({ logo, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {logo && 'Select file to replace'}
      {!logo && 'Select file to upload'}
    </button>
  );
};

export default Button;
