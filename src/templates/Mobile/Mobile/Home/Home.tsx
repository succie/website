import React from 'react';
import { useSelector } from 'react-redux';
import { Dock } from '../../../../organisms/Dock/Dock';
import { Mado } from '../../../../molecules/Mado/Mado';
import { RootState } from '../../../../store';

const madosSelector = (state: RootState) => state.mados;

export const Home = () => {
  const mados = useSelector(madosSelector);

  return (
    <div className="Home">
      <Dock />
      {mados.map((mado) => (
        <Mado key={mado.id} {...mado} numMados={1} isMobile={true} />
      ))}
    </div>
  );
};
