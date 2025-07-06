import { Status } from "./statuses";

export type SelectOptionType = {
    label: string;
    value: string;
};

export type NotificationType = {
    id: string;
    message: string;
    type: Extract<Status, Status.Success | Status.Error | Status.Info>;
};
