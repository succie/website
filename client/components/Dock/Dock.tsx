import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import DockItem from "../DockItem/DockItem";
import "./Dock.css";

const mapStateToProps = (state: RootState) => {
  return {
    mados: state.mados
  };
};

type Props = ReturnType<typeof mapStateToProps>;

const Dock = (props: Props) => {
  return (
    <div className="Dock">
      {props.mados.map(mado => (
        <DockItem
          key={mado.id}
          id={mado.id}
          icon={mado.icon}
          iconPrefix={mado.iconPrefix}
          isOpen={mado.isOpen}
          isActive={mado.isActive}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Dock);
