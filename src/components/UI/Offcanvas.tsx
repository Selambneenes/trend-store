import React from "react";
import "./Offcanvas.css";
import { BackdropType, OffcanvasOverlayType, OffcanvasType } from "../../ts/OffCanvas";
import ReactDOM from "react-dom";

const Backdrop: React.FC<BackdropType> = ({ onHideCart }) => {
  return <div className="backdrop" onClick={onHideCart} />;
};

const OffCanvasOverlay: React.FC<OffcanvasOverlayType> = ({children}) => {
  return (
      <div className="offcanvas">
        <div className="content">{children}</div>
      </div>
  )
}

const Offcanvas: React.FC<OffcanvasType> = ({ children, onHideCart }) => {
  const portalElement = document.querySelector("overlays");
  return (
    <>
      {ReactDOM.createPortal(<OffCanvasOverlay>{children}</OffCanvasOverlay>, portalElement!)}
      {ReactDOM.createPortal(<Backdrop onHideCart={onHideCart} />, portalElement!)}
    </>
  );
};

export default Offcanvas;
