import React, { FC } from 'react';
import { useState } from 'react';
import Progress from '../Progress/Progress';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Button from '../Button/Button';

const DropAria: FC = () => {
  const [logo, setLogo] = useState<string>('');
  const [drag, setDrag] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(true);
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
  };

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    let file = e.dataTransfer.files;
    setDrag(false);
    encodeImageFileAsURL(file);
  };

  function encodeImageFileAsURL(element: any) {
    var file = element[0];
    //To do
    var reader: any = new FileReader();
    reader.onloadend = function () {
      setLogo(reader.result.split(',')[1]);
    };
    reader.readAsDataURL(file);
  }

  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    encodeImageFileAsURL(e.currentTarget.files);
    setIsClicked(false);
  };

  return (
    <div
      className={drag ? 'main active' : 'main'}
      onDragEnter={e => dragStartHandler(e)}
      onDragLeave={e => dragLeaveHandler(e)}
      onDragOver={e => dragStartHandler(e)}
      onDrop={e => onDropHandler(e)}
    >
      {isLoading && <Progress isLoading={isLoading} />}

      {!isLoading && <Logo logo={logo} />}

      {isLoading && <p className="text">Uploading...</p>}
      {logo && <p className="text">Drag and drop here to replace</p>}
      {!isLoading && !logo && <p className="text">Drag and drop here </p>}

      <p className="text">or</p>
      <Button logo={logo} onClick={onClickHandler} />
      <Input isClicked={isClicked} onChange={handleChange} />
    </div>
  );
};

export default DropAria;
