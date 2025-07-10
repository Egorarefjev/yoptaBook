import { Status } from "./statuses";

export type OptionType = {
    label: string;
    value: string;
};


export type NotificationType = {
    id: string;
    message: string;
    type: Extract<Status, Status.Success | Status.Error | Status.Info>;
};

export type InputProps = {
    type?: string;
    placeholder?: string;
    value?: string;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
};

export interface RadioGroupProps {
    options: OptionType[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export interface CheckboxProps {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    disabled?: boolean;
}

export interface NavItem {
    label: string;
    to: string;
}

export interface NavListProps {
    navItems: NavItem[];
    className?: string;
}

export interface IconProps {
    name: string;
    size?: number; // в px
    className?: string;
}
