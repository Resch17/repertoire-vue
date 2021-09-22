import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function getAll<T>(
    baseUrl: string,
    queryString?: string
): Promise<T[]> {
    try {
        let set = new Array<T>();
        let url = baseUrl;
        if (queryString) {
            url += queryString;
        }
        const response = await apiClient.get(url);
        set = response.data;
        return set;
    } catch (err) {
        throw err;
    }
}

export async function getMultipleById<T>(
    baseUrl: string,
    resourceId: number,
    routeParam?: string
): Promise<T[]> {
    try {
        let set = new Array<T>();
        const response = await apiClient.get(
            routeParam
                ? `${baseUrl}/${routeParam}/${resourceId}`
                : `${baseUrl}/${resourceId}`
        );
        set = response.data;
        return set;
    } catch (err) {
        throw err;
    }
}

export async function getOneById<T>(
    baseUrl: string,
    resourceId: number,
    routeParam?: string
): Promise<T> {
    try {
        let item;
        const response = await apiClient.get(
            routeParam
                ? `${baseUrl}/${routeParam}/${resourceId}`
                : `${baseUrl}/${resourceId}`
        );
        item = response.data;
        return item;
    } catch (err) {
        throw err;
    }
}

export async function addResource<T>(baseUrl: string, resource: T) {
    try {
        const response = await apiClient.post(baseUrl, resource);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function updateResource<T>(
    baseUrl: string,
    resource: T,
    resourceId?: number
) {
    try {
        const response = await apiClient.put(
            resourceId ? `${baseUrl}/${resourceId}` : baseUrl,
            resource
        );
        return response.data;
    } catch (err) {
        throw err;
    }
}
