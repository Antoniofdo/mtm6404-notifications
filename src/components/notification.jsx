function Notification({ name, message, onClear, children }) {
  return (
    <div className="Notification">
      {children} {/* Optional extra content passed from App */}
      <h3>{name}</h3>
      <p>{message}</p>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default Notification;