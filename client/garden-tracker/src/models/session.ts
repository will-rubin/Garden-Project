import { reactive } from "vue";
import type { User } from "./users";
import { api } from "./myFetch"

const session = reactive({
    user: null as User | null,
    token: null as string | null,
    loading: 0,
    redirectURL: null as string | null,
});

export async function getSession() {
    return session;
}

export function sessionAPI(action: string, body?: unknown, method?: string, headers?: any) {
    console.log("session.ts api action: " + action)
    console.log("session.ts api body: " + body)
    console.log("session.ts api method: " + method)
    console.log("session.ts api headers: " + headers)
    session.loading++;
    if(session.token) {
        headers = headers ?? {};
        headers.Authorization = `Bearer ${session.token}`;
    }
    return api(`${action}`, body, method, headers)
        .catch(err => console.error(err))
        .finally(() => session.loading--);
}

export async function login(username: string, password: string) {
    console.log("session login triggered")
    try {
        const { user, token } = await sessionAPI('users/login', { username, password });
        console.log("session.ts login user: " + username)
        session.user = user;
        session.token = token;
    } catch (e) {
        console.error(e);
    }
}

export async function logout() {
    console.log("session logout triggered")
    try {
        session.user = null;
        session.token = null;
    } catch (e) {
        console.error(e);
    }
}