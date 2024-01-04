const LoadingSpineer = () => {
  return (
    <div className="text-center spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpineer;
