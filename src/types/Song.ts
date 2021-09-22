import { Artist } from './Artist';
import { Genre } from './Genre';
import { Instrument } from './Instrument';
import { Tuning } from './Tuning';
import { User } from './User';

export interface Song {
    id: number;
    title: string;
    artistId: number;
    genreId: number;
    instrumentId: number;
    userId: number;
    tuningId: number;
    url?: string;
    youtube?: string;
    artist: Artist;
    genre: Genre;
    instrument: Instrument;
    user: User;
    tuning: Tuning;
}
