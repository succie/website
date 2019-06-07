import React, { useMemo, useCallback, ReactNode, lazy, Suspense } from "react";
import { connect } from "react-redux";
import Draggable from "react-draggable";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { madoActions, Mado } from "../../store/mado";
import "./Mado.css";
import "./Mado.is-mobile.css";

const mapDispatchToProps = (dispatch: any) => {
  return {
    close: (id: string) => dispatch(madoActions.closeMado(id)),
    moveFront: (id: string) => dispatch(madoActions.moveFrontMado(id))
  };
};

type ExternalProps = {
  numMados: number;
  isMobile?: boolean;
};

type Props = ReturnType<typeof mapDispatchToProps> & ExternalProps & Mado;

const Mado = (props: Props) => {
  if (!props.isOpen) return null;

  const Content = lazy(() => import(`./Contents/${props.id}/${props.id}`));

  const cns = useMemo(
    () =>
      classnames(
        "Mado",
        { "is-active": props.isActive },
        { "is-mobile": props.isMobile }
      ),
    [props.isActive, props.isMobile]
  );

  const closeMado = useCallback(() => {
    props.close(props.id);
  }, []);

  const moveFrontMado = useCallback(() => {
    props.moveFront(props.id);
  }, []);

  return (
    <Draggable
      handle=".Mado-header"
      defaultPosition={{
        x: (props.zIndex % (props.numMados + 1)) * 10,
        y: (props.zIndex % (props.numMados + 1)) * 10
      }}
    >
      <div
        className={cns}
        onMouseDownCapture={moveFrontMado}
        style={{ zIndex: props.zIndex }}
      >
        <div className="Mado-header">
          <span className="Mado-header-title">{props.id}</span>
          <button
            className="Mado-header-close"
            onClick={closeMado}
            aria-label="close"
          >
            <FontAwesomeIcon icon={faTimes} color="#fafafa" />
          </button>
        </div>
        <div className="Mado-content">
          {useMemo(
            () => (
              <Suspense fallback={<FontAwesomeIcon icon={faSpinner} spin />}>
                <Content />
              </Suspense>
            ),
            []
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Mado);
