import { Artist } from './Artist';
import { Genre } from './Genre';
import { Instrument } from './Instrument';
import { Tuning } from './Tuning';
import { User } from './User';

export interface Song {
    Id: number;
    Title: string;
    ArtistId: number;
    GenreId: number;
    InstrumentId: number;
    UserId: number;
    TuningId: number;
    Url?: string;
    Youtube?: string;
    Artist: Artist;
    Genre: Genre;
    Instrument: Instrument;
    User: User;
    Tuning: Tuning;
}
