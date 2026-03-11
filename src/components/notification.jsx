function Notification({ id, name, message, onClear }) {
  return (
    <div className="notification">
      <h4>{name}</h4>
      <p>{message}</p>

      <button onClick={() => onClear(id)}>
        Clear
      </button>
    </div>
  );
}

export default Notification;