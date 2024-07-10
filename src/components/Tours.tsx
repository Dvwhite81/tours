import { TourType } from '../types';
import Tour from './Tour';

interface ToursProps {
  tours: TourType[];
  remove: (id: number) => void;
}

const Tours = ({ tours, remove }: ToursProps) => {
  return (
    <section className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} remove={remove} />
      ))}
    </section>
  );
};

export default Tours;
