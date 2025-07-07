import { sessionAPI } from './session';

export interface User {
    user_id: number;
    username: string;
    password: string;
    email: string;
    location: string;
    date_created: Date;
}

export async function getUsers(): Promise<User[]> {
    return await sessionAPI('users/getAllUsers');
}

export async function getUser(id: number): Promise<User> {
    return await sessionAPI(`users/getUserById/${id}`);
}

export async function register(username: string, password: string, email: string, location: string): Promise<User> {
    return await sessionAPI('users/registerUser', { username, password, email, location });
}

export async function updateUser(id: number, username: string, email: string, location: string): Promise<User> {
    return await sessionAPI('users/updateUser', { id, username, email, location });
}

export async function deleteUser(id: number): Promise<void> {
    return await sessionAPI('users/deleteUser', { id });
}