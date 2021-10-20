import React, { FC } from 'react';

interface IInputProps {
  isClicked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = ({ isClicked, onChange }) => {
  return (
    <div className={isClicked ? 'input' : 'hidden'}>
      <input onChange={onChange} type="file" accept=".jpg, .jpeg, .png" />
    </div>
  );
};

export default Input;
