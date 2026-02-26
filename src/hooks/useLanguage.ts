import {useState, useCallback, useMemo} from 'react';

const DEFAULT_LANGUAGE = 'ru-en';

export default function useLanguage() {
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

    const [from, to] = useMemo(() => language.split('-'), [language]);

    return {
        language,
        setLanguage,
        from,
        to
    };
}
