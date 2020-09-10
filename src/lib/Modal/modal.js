import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, children }) => {
  function handleOverlayClicked(e) {
    if (e.target.className !== 'modal-wrapper') {
      return;
    }
    hide();
  }

  return isShowing ? ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={handleOverlayClicked}>
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </>, document.body,
  ) : null;
};

export default Modal;
