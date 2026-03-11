import { useState } from "react";
import notificationsData from "../notifications";
import Notification from "./Notification";

function NotificationList({ children }) {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    const updated = notifications.filter((n) => n.id !== id);
    setNotifications(updated);
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div>
      {children}

      <h2>Notifications ({notifications.length})</h2>

      <button onClick={clearAll}>
        Clear All
      </button>

      {notifications.map((n) => (
        <Notification
          key={n.id}
          id={n.id}
          name={n.name}
          message={n.message}
          onClear={clearNotification}
        />
      ))}
    </div>
  );
}

export default NotificationList;