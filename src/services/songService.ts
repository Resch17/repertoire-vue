import {
    getAll,
    getMultipleById,
    getOneById,
    updateResource,
} from './dataService';
import { Song } from '../types/Song';

const resourceBase = '/song';

export async function getAllSongs(): Promise<Song[]> {
    return getAll<Song>(resourceBase);
}

export async function getSongsByUser(userId: number): Promise<Song[]> {
    return getMultipleById<Song>(resourceBase, userId, 'user');
}

export async function getSongById(songId: number): Promise<Song> {
    return getOneById<Song>(resourceBase, songId);
}

export async function updateSong(song: Song) {
    return updateResource(resourceBase, song, song.id);
}
