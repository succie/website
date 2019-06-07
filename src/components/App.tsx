import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header/Header";
import Dock from "./Dock/Dock";
import Field from "./Field/Field";
import Mobile from "./Mobile";
import { RootState } from "../store";
import { deviceActions } from "../store/device";

const mapStateTopProps = (state: RootState) => {
  return {
    device: state.device
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setDeviceType: (isMobile: boolean) =>
      dispatch(deviceActions.setDeviceType(isMobile))
  };
};

type Props = ReturnType<typeof mapStateTopProps> &
  ReturnType<typeof mapDispatchToProps>;

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.checkMobile();
    window.onresize = this.checkMobile;
  }

  private checkMobile = () => {
    if (window.innerWidth <= 768 && !this.props.device.isMobile)
      this.props.setDeviceType(true);
    else if (window.innerWidth > 768 && this.props.device.isMobile)
      this.props.setDeviceType(false);
  };

  render() {
    return (
      <div className="App">
        {this.props.device.isMobile ? (
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
  }
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(App);
