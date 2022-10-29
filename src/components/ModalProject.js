function ModalProjects({ name, description, url, image, position, onClose }) {
  const handleEvent = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
          <a
            {...(url ? { href: url } : {})}
            target="_blank"
            rel="noreferrer"
            className={url ? "" : "disabled"}
          >
            Visit
          </a>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ModalProjects;
