const ProgressBar = ({ value, label }) => {
  return (
    <div className="progress">
      {label && <span className="progress-label">{label}</span>}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
      <span className="progress-value">{value}%</span>
    </div>
  );
};

export default ProgressBar;