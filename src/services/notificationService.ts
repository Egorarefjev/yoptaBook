type Notification = {
    id: string;
    message: string;
    type?: 'success' | 'error' | 'info';
};

type Listener = (notifications: Notification[]) => void;

let notifications: Notification[] = [];
let listeners = new Set<Listener>();
let idCounter = 0;

export const NotificationService = {
    subscribe(listener: Listener): () => void {
        listeners.add(listener);
        listener(notifications);
        return () => {
            listeners.delete(listener);
        };
    },

    notify(message: string, type: Notification['type'] = 'info') {
        const id = String(++idCounter);
        notifications = [...notifications, { id, message, type }];
        notifyAll();
        setTimeout(() => {
            notifications = notifications.filter((n) => n.id !== id);
            notifyAll();
        }, 3000);
    },
};

function notifyAll() {
    for (const listener of listeners) {
        listener(notifications);
    }
}
