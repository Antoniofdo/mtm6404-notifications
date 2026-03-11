import { useState } from "react";
import notificationsData from "./notifications";
import NotificationList from "./components/NotificationList";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="container">
      <h1>Notifications</h1>
      <h2>{notifications.length} Notifications</h2>
      <button onClick={clearAll}>Clear All</button>

      <NotificationList
        notifications={notifications}
        clearNotification={clearNotification}
      />
    </div>
  );
}

export default App;