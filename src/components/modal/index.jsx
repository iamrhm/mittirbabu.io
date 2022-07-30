import React from 'react';

export default function Modal({children}) {
  return(
    <>
      <style jsx>
        {`
          .fixed-modal-backdrop {
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
      <div className="fixed-modal-backdrop">
        {children}
      </div>
    </>
  )
}