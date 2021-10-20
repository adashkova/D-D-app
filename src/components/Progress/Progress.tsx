import { FC, useState } from 'react';

import './progress.scss';

interface IProgressProps {
  isLoading: boolean;
}

const Progress: FC<IProgressProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState<number>(20);

  let progressEl = document.querySelector('.progress') as HTMLElement;

  let increaseProgress = function (): void {
    setProgress(progress + 20);
    progressEl.style.transform = 'rotate(' + progress + 'deg)';
    setProgress(progress);
  };

  return (
    <div className="circle-out">
      <div className="progress"></div>
      <div className="circle-in" onMouseOver={increaseProgress}></div>
    </div>
  );
};

export default Progress;
