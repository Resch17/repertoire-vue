import { Instrument } from '@/types/Instrument';
import { getAll } from './dataService';

const resourceBase = '/instrument';

export async function getAllInstruments(): Promise<Instrument[]> {
    return getAll<Instrument>(resourceBase);
}
