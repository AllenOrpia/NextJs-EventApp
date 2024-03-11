
import { Fragment, useContext } from "react";
import Header from "./Header";
import NotificationContext from "../../store/notification-context";

const layout = (props) => {
    const notificationCtx = useContext(NotificationContext);

    const activeNotification = notificationCtx.notification;

    return (
        <Fragment>
            <Header />
            <main>
                {props.children}
            </main>
            {activeNotification && <p>{activeNotification.title} - {activeNotification.message}</p>}
        </Fragment>
    )
}

export default layout