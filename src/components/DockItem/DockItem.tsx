import React, { useMemo, useCallback } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { madoActions } from "../../store/mado";
import "./DockItem.css";
import "./DockItem.is-mobile.css";

type ExternalProps = {
  id: string;
  icon: string;
  iconPrefix?: string;
  isOpen: boolean;
  isActive: boolean;
  isMobile: boolean;
};

type Props = ReturnType<typeof mapDispatchToProps> & ExternalProps;

const mapDispatchToProps = (dispatch: any) => {
  return {
    open: (id: string) => dispatch(madoActions.openMado(id)),
    moveFront: (id: string) => dispatch(madoActions.moveFrontMado(id))
  };
};

const DockItem = (props: Props) => {
  const cns = useMemo(
    () =>
      classnames("DockItem", {
        "is-open": props.isOpen,
        "is-active": props.isActive,
        "is-mobile": props.isMobile
      }),
    [props.isOpen, props.isActive]
  );

  const open = useCallback((id: string) => {
    props.open(id);
    props.moveFront(id);
  }, []);

  return (
    <div className={cns} data-title={props.id}>
      <button
        className="DockItem-button"
        onClick={() => open(props.id)}
        aria-label={`dock item ${props.id}`}
      >
        <FontAwesomeIcon
          icon={[
            (props.iconPrefix || "fas") as IconPrefix,
            props.icon as IconName
          ]}
          size="4x"
          color="#fafafa"
        />
      </button>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(DockItem);
