import { NotificationType } from "../types/ui";
import { Status } from "../types/statuses";

type Listener = (notifications: NotificationType[]) => void;

let notifications: NotificationType[] = [];
let listeners = new Set<Listener>();
let idCounter = 0;

const NOTIFICATION_LIFETIME = 3000;

export const NotificationService = {
    subscribe(listener: Listener): () => void {
        listeners.add(listener);
        listener(notifications);
        return () => {
            listeners.delete(listener);
        };
    },

    notify(message: string, type: Status.Success | Status.Error | Status.Info) {
        const id = String(++idCounter);

        const newNotification: NotificationType = {
            id,
            message,
            type,
        };

        notifications = [...notifications, newNotification];
        notifyAll();

        setTimeout(() => {
            notifications = notifications.filter((n) => n.id !== id);
            notifyAll();
        }, NOTIFICATION_LIFETIME);
    },
};

function notifyAll() {
    for (const listener of listeners) {
        listener(notifications);
    }
}
