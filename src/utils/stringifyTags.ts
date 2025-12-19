export function stringifyTags(tags: string[]): string {
    return tags
        .map(tag => tag.trim())
        .filter(Boolean)
        .join(', ');
}