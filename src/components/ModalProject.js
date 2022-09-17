function ModalProjects({ name, description, url, image, onClose }) {
  const handleEvent = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="overlayModal" onClick={handleEvent}>
      <div className="modal">
        <img src={image} alt="no Img Found" />
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
