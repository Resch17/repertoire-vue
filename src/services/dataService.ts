import axios, { AxiosError } from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export type APIResponse = [null, unknown] | [Error | unknown];

export async function getAll<T>(baseUrl: string): Promise<T[]> {
    try {
        let set = new Array<T>();
        const response = await apiClient.get(baseUrl);
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

export async function addResource<T>(url: string, resource: T) {
    try {
        const response = await apiClient.post(url, resource);
        return response.data;
    } catch (err) {
        throw err;
    }
}
