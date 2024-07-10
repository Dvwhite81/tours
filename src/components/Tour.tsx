import { useState } from 'react';
import { TourType } from '../types';

interface TourProps {
  tour: TourType;
  remove: (id: number) => void;
}

const Tour = ({ tour, remove }: TourProps) => {
  const [showFull, setShowFull] = useState(false);

  const { id, image, info, name, price } = tour;
  const shortenedInfo = info.slice(0, 200);

  const toggleShowFull = () => setShowFull((prev) => !prev);

  return (
    <article className="single-tour">
      <span className="tour-price">${price}</span>
      <img className="img" src={image} alt={name} />

      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {showFull ? info : shortenedInfo}{' '}
          <button type="button" className="info-btn" onClick={toggleShowFull}>
            {showFull ? 'Show Less' : 'Show More'}
          </button>
        </p>

        <button
          type="button"
          className="delete-btn btn-block"
          onClick={() => remove(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
