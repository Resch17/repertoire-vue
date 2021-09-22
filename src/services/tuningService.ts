import { Tuning } from '@/types/Tuning';
import { getAll, getOneById } from './dataService';

const resourceBase = '/tuning';

export async function getAllTunings(): Promise<Tuning[]> {
    return getAll<Tuning>(resourceBase);
}

export async function getTuningById(tuningId: number): Promise<Tuning> {
    return getOneById<Tuning>(resourceBase, tuningId);
}
