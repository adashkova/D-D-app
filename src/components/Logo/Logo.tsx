import { FC } from 'react';

interface ILogoProps {
  logo: string;
}
export const Logo: FC<ILogoProps> = ({ logo }) => {
  return (
    <div className="logo">
      <img
        className="logo_img"
        src={
          logo
            ? `data:image/png;base64,${logo}`
            : `https://www.onlinelogomaker.com/logomaker/img/cloud2.png`
        }
        alt="lodo"
      />
    </div>
  );
};
export default Logo;
