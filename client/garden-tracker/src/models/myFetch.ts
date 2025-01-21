const API_ROOT = import.meta.env.VITE_API_ROOT;

async function rest(url: string, body?: unknown, method?: string, headers?: any) {
    try {
        const response = await fetch(url, {
            method: method ?? (body ? "POST" : "GET"),
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: body ? JSON.stringify(body) : undefined
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData);
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }

}

export function api(action: string, body?: unknown, method?: string, headers?: any) {
    return rest(`${API_ROOT}/${action}`, body, method, headers);
}