import React, { useCallback, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Header from './organisms/Header/Header';
import Dock from './organisms/Dock/Dock';
import Field from './organisms/Field/Field';
import Mobile from './templates/Mobile';
import { RootState } from './store';
import { deviceActions } from './store/device';

type Props = {
  isMobile: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Component: React.FC<Props> = ({ isMobile }) => {
  return (
    <div className="App">
      {isMobile ? (
        <Mobile />
      ) : (
        <>
          <Header />
          <Dock />
          <Field />
        </>
      )}
    </div>
  );
};

const isMobileSelector = (state: RootState) => state.device.isMobile;

const Container = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector(isMobileSelector);

  const checkMobile = useCallback(() => {
    if (!isMobile && window.innerWidth <= 768) {
      dispatch(deviceActions.setDeviceType(true));
    } else if (isMobile && window.innerWidth > 768) {
      dispatch(deviceActions.setDeviceType(false));
    }
  }, [isMobile]);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [checkMobile]);

  return <Component isMobile={isMobile} />;
};

export const App = Container;
