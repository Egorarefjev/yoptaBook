export  function buildQuery(params = {}) {
    const urlSearchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null) return;

        const stringValue = String(value).trim();
        if (stringValue.length === 0) return;

        urlSearchParams.set(key, stringValue);
    });

    const queryString = urlSearchParams.toString();
    return queryString ? `?${queryString}` : "";
}