import { useState } from "react";
import markWebber from "./assets/images/avatar-mark-webber.webp";
import angelaGray from "./assets/images/avatar-angela-gray.webp";
import annaKim from "./assets/images/avatar-anna-kim.webp";
import jacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import kimberelySmith from "./assets/images/avatar-kimberly-smith.webp";
import nathanPeterson from "./assets/images/avatar-nathan-peterson.webp";
import rizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";
import chessImage from "./assets/images/image-chess.webp";

function App() {
    const [notificationCount, setNotificationCount] = useState(3);
    const [unread, setUnread] = useState(true);

    const markAllAsRead = () => {
        setNotificationCount(0);
        setUnread(false);
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
                <button
                    className="text-DarkGrayishBlue font-medium hover:text-Blue"
                    onClick={markAllAsRead}
                >
                    Mark all as read
                </button>
            </section>

            <ul className="flex flex-col gap-y-2">
                <li
                    className={`w-full flex justify-start items-center px-6 py-3 rounded ${
                        unread ? "bg-VeryLightGrayishBlue" : null
                    }`}
                >
                    <img src={markWebber} alt="user profile image" />
                    <section className="ml-5">
                        <p>
                            <strong id="user">mark webber</strong>
                            <span className="mx-2">reacted to your recent post</span>
                            <strong id="activity">
                                My first tournament today!
                                <span className={`dot ${unread && "unread"}`}></span>
                            </strong>
                        </p>
                        <p className="timeAgo">1m ago</p>
                    </section>
                </li>
                <li
                    className={`w-full flex justify-start items-center px-6 py-3 rounded ${
                        unread ? "bg-VeryLightGrayishBlue" : null
                    }`}
                >
                    <img src={angelaGray} alt="user profile image" />
                    <section className="ml-5">
                        <p>
                            <strong id="user">angela gray</strong>
                            <span className="mx-2">followed you</span>
                            <strong id="activity">
                                <span className={`dot ${unread && "unread"}`}></span>
                            </strong>
                        </p>
                        <p className="timeAgo">5m ago</p>
                    </section>
                </li>
                <li
                    className={`w-full flex justify-start items-center px-6 py-3 rounded ${
                        unread ? "bg-VeryLightGrayishBlue" : null
                    }`}
                >
                    <img src={jacobThompson} alt="user profile image" />
                    <section className="ml-5">
                        <p>
                            <strong id="user">jacob thompson</strong>
                            <span className="mx-2">has joined your group</span>
                            <strong id="activity">
                                Chess Club
                                <span className={`dot ${unread && "unread"}`}></span>
                            </strong>
                        </p>
                        <p className="text-GrayishBlue text-sm mt-2 sm:mt-1">1 day ago</p>
                    </section>
                </li>
                <li className="w-full flex flex-col justify-center items-center px-6 py-3 rounded">
                    <section className="w-full flex justify-start items-center">
                        <img src={rizkyHasanuddin} alt="user profile image" />
                        <section className="ml-5">
                            <p>
                                <strong id="user">rizky hasanuddin</strong>
                                <span className="mx-2">sent you a private message</span>
                            </p>
                            <p className="timeAgo">5 days ago</p>
                        </section>
                    </section>
                    <p className="comment">
                        Hello, thanks for setting up the chess club. I have been a member for a few
                        weeks now and I&apos;m already having losts of fun and improving my game.
                    </p>
                </li>
                <li className="w-full flex flex-col justify-center items-center px-6 py-3 rounded">
                    <section className="w-full flex justify-start items-center">
                        <img src={kimberelySmith} alt="user profile image" />
                        <section className="ml-5">
                            <p>
                                <strong id="user">kimberely smith</strong>
                                <span className="mx-2">commented on your picture</span>
                            </p>
                            <p className="timeAgo">1 week ago</p>
                        </section>
                        <img
                            src={chessImage}
                            alt="activity image"
                            className="ml-auto border-[1px] border-transparent hover:border-GrayishBlue hover:p-[1px] hover:bg-LightGrayishBlue1 rounded-lg cursor-pointer"
                        />
                    </section>
                </li>
                <li className="w-full flex justify-start items-center px-6 py-3 rounded">
                    <img src={nathanPeterson} alt="user profile image" />
                    <section className="ml-5">
                        <p>
                            <strong id="user">nathan peterson</strong>
                            <span className="mx-2">reacted to your recent post</span>
                            <strong id="post">
                                5 end-game strategies to increase your win rate
                            </strong>
                        </p>
                        <p className="timeAgo">2 weeks ago</p>
                    </section>
                </li>
                <li className="w-full flex justify-start items-center px-6 py-3 rounded">
                    <img src={annaKim} alt="user profile image" />
                    <section className="ml-5">
                        <p className="flex gap-x-1 justify-start items-center flex-wrap">
                            <strong id="user">angela gray</strong>
                            <span>left the group</span>
                            <strong id="activity">Chess Club</strong>
                        </p>
                        <p className="timeAgo">2 weeks ago</p>
                    </section>
                </li>
            </ul>
        </main>
    );
}

export default App;
