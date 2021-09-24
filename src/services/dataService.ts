import axios from 'axios';
import { getToken } from './userService';

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
        const token = await getToken();
        const response = await apiClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        });
        set = response.data;
        return set;
    } catch (err) {
        throw err;
    }
}

export async function getMultipleById<T>(
    baseUrl: string,
    resourceId: number | string,
    routeParam?: string
): Promise<T[]> {
    try {
        let set = new Array<T>();
        const token = await getToken();
        const response = await apiClient.get(
            routeParam
                ? `${baseUrl}/${routeParam}/${resourceId}`
                : `${baseUrl}/${resourceId}`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        set = response.data;
        return set;
    } catch (err) {
        throw err;
    }
}

export async function getOneById<T>(
    baseUrl: string,
    resourceId: number | string,
    routeParam?: string
): Promise<T> {
    try {
        let item;
        const token = await getToken();
        const response = await apiClient.get(
            routeParam
                ? `${baseUrl}/${routeParam}/${resourceId}`
                : `${baseUrl}/${resourceId}`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        item = response.data;
        return item;
    } catch (err) {
        throw err;
    }
}

export async function addResource<T>(baseUrl: string, resource: T) {
    try {
        const token = await getToken();
        const response = await apiClient.post(baseUrl, resource, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function updateResource<T>(
    baseUrl: string,
    resource: T,
    resourceId?: number | string
) {
    try {
        const token = await getToken();
        const response = await apiClient.put(
            resourceId ? `${baseUrl}/${resourceId}` : baseUrl,
            resource,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        return response.data;
    } catch (err) {
        throw err;
    }
}
