import React from 'react'
import "./Offcanvas.css";

type OffcanvasType = {
  children: React.ReactNode;
  onHideCart: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Offcanvas: React.FC<OffcanvasType> = ({children, onHideCart}) => {
  return (
    <div>
        <div className='backdrop' onClick={onHideCart}/>
        <div className='offcanvas'>
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Offcanvas 