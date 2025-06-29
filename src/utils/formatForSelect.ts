import { SelectOptionType } from '../types/ui';

export function formatArrayToOptions(
    array: string[],
    withReset: boolean = false,
    resetText = 'Сбросить'
): SelectOptionType[] {
    const options = array.map(item => ({
        label: item.charAt(0).toUpperCase() + item.slice(1),
        value: item,
    }));

    if (withReset) {
        options.unshift({
            value: '',
            label: resetText,
        });
    }

    return options;
}

