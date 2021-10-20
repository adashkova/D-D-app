import { FC } from 'react';
import DropArea from '../DropArea/DropArea';
import './app.scss';

const App: FC = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="navbar">
          <h3 className="navbar_title">Company Logo</h3>
          <p className="navbar_title-subtext">
            Logo should be square, 100px size and in png, jpeg file format.
          </p>
        </div>
        <DropArea />
      </div>
    </div>
  );
};

export default App;
