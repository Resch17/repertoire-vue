import { getAll } from './dataService';
import { Song } from '../types/Song';

const resourceBase = '/song';

export async function getAllSongs(): Promise<Song[]> {
    return getAll<Song>(resourceBase);
}
