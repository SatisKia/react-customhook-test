import './Modal.css';
import { useModalContext } from '../hook/useModal';

function Modal({ params }) {
  const { modalShowFlag, closeModal } = useModalContext();
  if (modalShowFlag) {
    return (
      <div id="overlay" onClick={params.backdropClickToClose ? closeModal : null}>
        <div id="modal" onClick={(e) => e.stopPropagation()}>
          {params.content}
          <br/>
          <button onClick={closeModal}>{params.closeLabel}</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
