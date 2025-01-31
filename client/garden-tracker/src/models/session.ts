import { reactive } from "vue";
import type { User } from "./users";
import { api } from "./myFetch"

export const session = reactive({
    user: null as User | null,
    token: null as string | null,
    loading: 0,
    redirectURL: null as string | null,
});

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
    try {
        const { user, token } = await sessionAPI('users/login', { username, password });
        session.user = user;
        session.token = token;
    } catch (e) {
        console.error(e);
    }
}