import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Dock from './Dock/Dock';
import Field from './Field/Field';
import Mobile from './Mobile';
import { RootState } from '../store';
import { deviceActions } from '../store/device';

const mapStateTopProps = (state: RootState) => {
  return {
    device: state.device
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setDeviceType: (isMobile: boolean) => dispatch(deviceActions.setDeviceType(isMobile))
  };
};

type Props = ReturnType<typeof mapStateTopProps> & ReturnType<typeof mapDispatchToProps>;

const App = ({ device, setDeviceType }: Props) => {
  const checkMobile = useCallback(() => {
    if (window.innerWidth <= 768 && !device.isMobile) setDeviceType(true);
    else if (window.innerWidth > 768 && device.isMobile) setDeviceType(false);
  }, [device, setDeviceType]);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [checkMobile]);

  return (
    <div className="App">
      {device.isMobile ? (
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

export default connect(mapStateTopProps, mapDispatchToProps)(App);
