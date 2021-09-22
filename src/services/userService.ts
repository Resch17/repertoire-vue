import { User } from '@/types/User';
import { addResource, getOneById } from './dataService';

const resourceBase = '/user';

export async function getUserById(userId: number): Promise<User> {
    return getOneById(resourceBase, userId);
}

export async function addUser(user: User) {
    return addResource<User>(resourceBase, user);
}
