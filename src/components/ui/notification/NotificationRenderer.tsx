import styles from './NotificationRenderer.module.scss';
import { useEffect, useState } from 'react';
import { NotificationService } from '../../../services/notificationService';

type Notification = {
    id: string;
    message: string;
    type?: 'success' | 'error' | 'info';
};

export function NotificationRenderer() {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => NotificationService.subscribe(setNotifications), []);

    return (
        <div className={styles.container}>
            {notifications.map((notification) => (
                <div key={notification.id} className={`${styles.toast} ${styles[notification.type || 'info']}`}>
                    {notification.message}
                </div>
            ))}
        </div>
    );
}
