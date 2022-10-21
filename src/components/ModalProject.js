function ModalProjects({ name, description, url, image, position, onClose }) {
  const handleEvent = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  console.log(position);
  return (
    <div className="overlayModal" onClick={handleEvent}>
      <div
        className="modal"
        style={
          position === "left"
            ? { animationName: "fade-in-modal-left" }
            : position === "middle"
            ? { animationName: "fade-in-modal-middle" }
            : { animationName: "fade-in-modal-right" }
        }
      >
        <img src={image} alt="no Img Found" loading="lazy" />
        <h2>Name: {name}</h2>
        <p>{description}</p>
        <div className="flex-buttons">
          <a href={url} target="_blank" rel="noreferrer">
            Visit
          </a>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ModalProjects;
