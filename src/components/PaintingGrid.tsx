import React from 'react';
import './PaintingGrid.css';

export interface Painting {
  id: number;
  image: string;
}

interface PaintingGridProps {
  paintings: Painting[];
  onSelect: (painting: Painting) => void;
}

const PaintingGrid: React.FC<PaintingGridProps> = ({ paintings, onSelect }) => {
  return (
    <div className="painting-grid">
      {paintings.map((painting) => (
        <div
          key={painting.id}
          className="painting-tile"
          onClick={() => onSelect(painting)}
          tabIndex={0}
          aria-label={`paintingTitle${painting.id}`}
        >
          <img src={painting.image} alt={`paintingTitle${painting.id}`} />
        </div>
      ))}
    </div>
  );
};

export default PaintingGrid;
