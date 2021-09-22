import { Artist } from '@/types/Artist';
import { addResource, getAll, getOneById } from './dataService';

const resourceBase = '/artist';

export async function getAllArtists(): Promise<Artist[]> {
    return getAll<Artist>(resourceBase);
}

export async function getArtistById(artistId: number): Promise<Artist> {
    return getOneById<Artist>(resourceBase, artistId);
}

export async function addArtist(artist: Artist | any) {
    return addResource<Artist>(resourceBase, artist);
}
