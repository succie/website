import map from 'lodash/map';

export type MadoContentId = 'profile' | 'links' | 'twitter';

export type Mado = {
  id: MadoContentId;
  icon: string;
  iconPrefix?: string;
  isOpen: boolean;
  isActive: boolean;
  zIndex: number;
};

export enum MadoActionTypes {
  OPEN_MADO = 'OPEN_MADO',
  CLOSE_MADO = 'CLOSE_MADO',
  MOVE_FRONT_MADO = 'MOVE_FRONT_MADO',
}

export const madoActions = {
  openMado: (id: string) => {
    return {
      type: MadoActionTypes.OPEN_MADO,
      id,
    };
  },
  closeMado: (id: string) => {
    return {
      type: MadoActionTypes.CLOSE_MADO,
      id,
    };
  },
  moveFrontMado: (id: string) => {
    return {
      type: MadoActionTypes.MOVE_FRONT_MADO,
      id,
    };
  },
};

const initialData: Mado[] = [
  { id: 'profile', icon: 'user', isOpen: true, isActive: true, zIndex: 1 },
  { id: 'links', icon: 'link', isOpen: false, isActive: false, zIndex: 0 },
  { id: 'twitter', icon: 'twitter', iconPrefix: 'fab', isOpen: false, isActive: false, zIndex: 0 },
  // { id: "Contact", icon: 'envelope', isOpen: false, isActive: false, zIndex: 0 }
];

export const mados = (state: Mado[] = initialData, action: any) => {
  switch (action.type) {
    case MadoActionTypes.OPEN_MADO:
      return state.map((mado) => {
        if (mado.id === action.id) {
          mado.isOpen = true;
        }
        return mado;
      });
    case MadoActionTypes.CLOSE_MADO:
      return state.map((mado) => {
        if (mado.id === action.id) {
          mado.isOpen = false;
          mado.zIndex = 0;
        }
        return mado;
      });
    case MadoActionTypes.MOVE_FRONT_MADO:
      return state.map((mado, _, arr) => {
        const minZIndex = Math.min(...map(arr, 'zIndex'));
        const maxZIndex = Math.max(...map(arr, 'zIndex'));
        if (mado.id === action.id) {
          // 自身の zIndex が最小でなく, かつ最大であればそのまま返す.
          // そうでなければ maxZIndex + 1 を返す.
          mado.zIndex = mado.zIndex !== minZIndex && mado.zIndex === maxZIndex ? maxZIndex : maxZIndex + 1;
          mado.isActive = true;
        } else {
          mado.isActive = false;
        }
        return mado;
      });
    default:
      return state;
  }
};
