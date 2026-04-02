export const getApiUrl = () => {
    const { protocol, hostname } = window.location;

    const port = import.meta.env.DEV ? ':4000' : '';
    const apiPath = '/api';

    return `${protocol}//${hostname}${port}${apiPath}`;
}