import "./style.css";

function Modal({ description, removeModal }) {
  return (
    <div onClick={removeModal} className="modal">
      {description}
    </div>
  );
}

export default Modal;
