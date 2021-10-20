import React, { FC, useState } from 'react';
import Progress from '../Progress/Progress';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Button from '../Button/Button';

const DropArea: FC = () => {
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

  const encodeImageFileAsURL = (element: any) => {
    let file = element[0];
    //To do
    let reader: any = new FileReader();
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
      onDragEnter={dragStartHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragStartHandler}
      onDrop={onDropHandler}
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

export default DropArea;
