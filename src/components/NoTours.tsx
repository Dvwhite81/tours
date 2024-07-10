interface NoToursProps {
  fetchTours: () => void;
}

const NoTours = ({ fetchTours }: NoToursProps) => (
  <main>
    <div className="title">
      <h2 style={{ marginBottom: '1rem' }}>No Tours To Show</h2>
      <button className="btn" onClick={fetchTours}>
        Refresh
      </button>
    </div>
  </main>
);

export default NoTours;
