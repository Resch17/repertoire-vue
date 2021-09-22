import { Genre } from '@/types/Genre';
import { getAll } from './dataService';

const resourceBase = '/genre';

export async function getAllGenres(): Promise<Genre[]> {
    return getAll<Genre>(resourceBase);
}
