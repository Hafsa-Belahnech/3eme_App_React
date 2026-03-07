// Notifications.jsx
function Notifications({ nb }) {
  return (
    <div>
      {nb > 0 && <p>✅ Vous avez des notifications</p>}
    </div>
  );
}

export default Notifications;
