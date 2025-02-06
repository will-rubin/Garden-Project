import { sessionAPI } from './session'

export interface Garden {
    garden_id: number;
    garden_name: string;
    location: string;
    sun_level: number;
    owner_id: number;
}

export async function getGardens() {
    return sessionAPI('gardens/getAllGardens')
}

export async function getGarden(garden_id: number) {
    return sessionAPI('gardens/readGarden', { garden_id })
}

export async function getGardensByUser(owner_id: number) {
    return sessionAPI('gardens/selectGardensByOwnerId', { owner_id })
}

export async function createGarden(garden_name: string, location: string, sun_level: number, owner_id: number) {
    return sessionAPI('gardens/createGarden', { garden_name, location, sun_level, owner_id })
}

export async function deleteGarden(garden_id: number) {
    return sessionAPI('gardens/deleteGarden', { garden_id })
}

export async function updateGarden(garden: Garden) {
    return sessionAPI('gardens/updateGarden', garden)
}