import { User } from '@/types/User';
import { addResource, getOneById } from './dataService';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import config from '../firebase';
import store from '@/store';

const resourceBase = '/user';
const firebaseConfig = config;

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export async function getUserById(userId: number): Promise<User> {
    return getOneById(resourceBase, userId);
}

export async function getUserFirebase(firebaseId: string): Promise<User> {
    return getOneById(resourceBase, firebaseId, 'fb');
}

export async function addUser(user: User) {
    return addResource<User>(resourceBase, user);
}

export async function login(email: string, pw: string) {
    const signInResponse = await signInWithEmailAndPassword(auth, email, pw);
    const firebaseId = signInResponse.user.uid;
    const user: User = await getUserFirebase(firebaseId);
    store.dispatch('setCurrentUser', user);
    store.dispatch('setIsLoggedIn', true);
    return;
}

export async function register(email: string, username: string, pw: string) {
    const registerResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        pw
    );
    const firebaseId = registerResponse.user.uid;
    const newUser: User = {
        firebaseId,
        email,
        username,
        themeId: 1,
    };
    const userId = await addUser(newUser);
    const user: User = await getUserFirebase(firebaseId);
    store.dispatch('setCurrentUser', user);
    store.dispatch('setIsLoggedIn', true);
}

export async function logout() {
    signOut(auth);
    store.dispatch('setCurrentUser', null);
    store.dispatch('setIsLoggedIn', false);
}

export async function getToken(): Promise<string | undefined> {
    return auth.currentUser?.getIdToken();
}
