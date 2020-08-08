export type Device = {
  isMobile: boolean;
};

export enum DeviceActionTypes {
  SET_DEVICE_TYPE = 'SET_DEVICE_TYPE',
}

export const deviceActions = {
  setDeviceType: (isMobile: boolean) => {
    return {
      type: DeviceActionTypes.SET_DEVICE_TYPE,
      isMobile,
    };
  },
};

const initialState: Device = {
  isMobile: false,
};

export const device = (state: Device = initialState, action: any) => {
  switch (action.type) {
    case DeviceActionTypes.SET_DEVICE_TYPE:
      return {
        ...state,
        isMobile: action.isMobile,
      };
    default:
      return state;
  }
};
