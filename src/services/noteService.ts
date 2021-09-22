import { Note } from '@/types/Note';
import { getAll } from './dataService';

const resourceBase = '/note';

export async function getNotes(
    songId: number,
    userId: number
): Promise<Note[]> {
    const queryString = `/?songId=${songId}&userId=${userId}`;
    return getAll<Note>(resourceBase, queryString);
}
