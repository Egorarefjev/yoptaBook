import { SelectOptionType } from '../types/ui';

export function formatArrayToOptions(tags: string[]): SelectOptionType[] {
    return tags.map(tag => ({
        label: tag.charAt(0).toUpperCase() + tag.slice(1),
        value: tag
    }));
}
