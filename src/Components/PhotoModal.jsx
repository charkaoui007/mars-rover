import React from 'react';
import '../assets/styles/PhotoModal.css';

const PhotoModal = ({ photo, onClose }) => {
    if (!photo) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={photo.img_src} alt={photo.camera.full_name} className="modal-img" />
                <div className="modal-info">
                    <h2>{photo.camera.full_name}</h2>
                    <p><strong>Rover:</strong> {photo.rover.name}</p>
                    <p><strong>Earth Date:</strong> {photo.earth_date}</p>
                    <p><strong>Landing Date:</strong> {photo.rover.landing_date}</p>
                    <p><strong>Launch Date:</strong> {photo.rover.launch_date}</p>
                    <p><strong>Status:</strong> {photo.rover.status}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;
