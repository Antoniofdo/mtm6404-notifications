import Notification from "./notification.jsx";

function NotificationList({ notifications, clearNotification }) {
  return (
    <div>
      {notifications.map((n) => (
        <Notification
          key={n.id}
          id={n.id}
          name={n.name}
          message={n.message}
          onClear={() => clearNotification(n.id)}
        />
      ))}
    </div>
  );
}

export default NotificationList;