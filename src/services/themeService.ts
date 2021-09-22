import { Theme } from '@/types/Theme';
import { getAll } from './dataService';

const resourceBase = '/theme';

export async function getAllThemes(): Promise<Theme[]> {
    return getAll<Theme>(resourceBase);
}
