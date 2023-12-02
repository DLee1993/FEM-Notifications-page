import { useState } from "react";

function App() {
    const [notificationCount, setNotificationCount] = useState(3);

    const markAllAsRead = () => {
        setNotificationCount(0);
    };

    return (
        <main>
            <section id="notification-bar" className="flex justify-between items-center mb-10">
                <p className="text-lg font-extrabold flex justify-start">
                    Notifications
                    <span className="text-white bg-Blue rounded-md w-7 h-6 text-sm ml-3 flex justify-center items-center">
                        {notificationCount}
                    </span>
                </p>
                <button className="text-DarkGrayishBlue font-medium" onClick={markAllAsRead}>
                    Mark all as read
                </button>
            </section>
            <ul>notification list</ul>
        </main>
    );
}

export default App;
