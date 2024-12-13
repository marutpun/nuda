import { useRef, useEffect, useCallback } from 'react';
import { Modal } from 'bootstrap';

export function TermNCond() {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalInstance = useRef<Modal | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      try {
        // Initialize the Bootstrap modal
        modalInstance.current = new Modal(modalRef.current, {
          keyboard: true, // Allow closing with ESC
          backdrop: true, // Allow closing on clicking outside
        });
      } catch (error) {
        console.error('Error initializing modal:', error);
      }
    }

    // Cleanup function to dispose of modal instance
    return () => {
      if (modalInstance.current) {
        modalInstance.current.dispose();
      }
    };
  }, []);

  const handleShow = () => {
    if (modalInstance.current) {
      modalInstance.current.show();
    }
  };

  // Use useCallback to prevent unnecessary re-renders when _handleClose is passed around
  const _handleClose = useCallback(() => {
    if (modalInstance.current) {
      modalInstance.current.hide();
    }
  }, []);

  return (
    <>
      <button type="button" className="btn btn-link" onClick={handleShow}>
        Terms and Conditions
      </button>

      <div className="modal fade" ref={modalRef} tabIndex={-1} aria-labelledby="terms-conditions" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="terms-conditions">
                Terms and Conditions
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={_handleClose} // Close on click
              ></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>Check-in Time: 14:00 (2:00 PM)</li>
                <li>Check-out Time is 12:00 (12:00 PM)</li>
                <li>Maximum of 15 guests. Any combination of adults and children not exceeding the maximum occupancy in total.</li>
                <li>Children aged 12 or younger sleep for free in the existing bedding of a shared room with a paying adult. Fees apply should a rollaway bed be required.</li>
              </ul>
              <p>Images are for illustrative purposes only. Actual room size and furniture may differ.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={_handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
