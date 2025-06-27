import React from 'react';
import './PaintingModal.css';
import type { Painting } from './PaintingGrid';

interface PaintingModalProps {
  painting: Painting;
  onClose: () => void;
  title: string;
  description: string;
}

const PaintingModal: React.FC<PaintingModalProps> = ({ painting, onClose, title, description }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img
          src={painting.image}
          alt={title}
          className="modal-image"
          onClick={onClose}
          style={{ cursor: 'zoom-out' }}
        />
        <div className="modal-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PaintingModal;
