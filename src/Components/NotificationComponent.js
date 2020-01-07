import React from 'react'
import '../asserts/css/notification-msg.css'

const notificationMsgType = {
    'success': {
        'className': 'success-msg'
    },
    'failure': {
        'className': 'failure-msg'
    }
}

const NotificationMsg = ({message}) => {
    let message_type = message && message["type"] ? message["type"] : null;
    if ( message_type && (message_type in notificationMsgType)) {
        return (
        <div className={"msg " + notificationMsgType[message_type]["className"]}>
            <h3>{message.message}</h3>
        </div>
        );
    } else return(<React.Fragment/>)
}

export default NotificationMsg;