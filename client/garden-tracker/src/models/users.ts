import { api } from './myFetch';

export interface User {
    user_id: number;
    username: string;
    password: string;
    email: string;
    location: string;
    date_created: Date;
}

export async function getUsers(): Promise<User[]> {
    return await api('users/getAllUsers');
}

export async function getUser(id: number): Promise<User> {
    return await api(`users/getUserById/${id}`);
}

export async function login(username: string, password: string): Promise<User> {
    return await api('users/login', { username, password });
}

export async function register(username: string, password: string, email: string, location: string): Promise<User> {
    return await api('users/register', { username, password, email, location });
}

export async function updateUser(id: number, username: string, email: string, location: string): Promise<User> {
    return await api('users/updateUser', { id, username, email, location });
}

export async function deleteUser(id: number): Promise<void> {
    return await api('users/deleteUser', { id });
}