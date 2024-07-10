import { useCallback, useEffect, useState } from 'react';
import { TourType } from './types';
import './App.css';
import Loading from './components/Loading';
import Title from './components/Title';
import Tours from './components/Tours';
import NoTours from './components/NoTours';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState<TourType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  const remove = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (isLoading) return <Loading />;

  if (tours.length === 0) return <NoTours fetchTours={fetchTours} />;

  return (
    <main>
      <Title title="Our Tours" />
      <Tours tours={tours} remove={remove} />
    </main>
  );
}

export default App;
