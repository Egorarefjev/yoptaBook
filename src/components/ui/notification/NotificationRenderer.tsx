import styles from './NotificationRenderer.module.scss';
import { useEffect, useState } from 'react';
import { NotificationService } from '../../../services/notificationService';
import { NotificationType } from '../../../types/ui'


export function NotificationRenderer() {
    const [notifications, setNotifications] = useState<NotificationType[]>([]);

    useEffect(() => NotificationService.subscribe(setNotifications), []);

    return (
        <div className={styles.container}>
            {notifications.map((notification) => {
                return (
                    <div
                        key={notification.id}
                        className={`${styles.toast} ${styles[notification.type]}`}
                    >
                        {notification.message}
                    </div>
                );
            })}


        </div>
    );
}
