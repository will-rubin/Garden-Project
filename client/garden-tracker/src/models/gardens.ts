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

export async function createGarden(garden: Garden) {
    return sessionAPI('gardens/createGarden', garden)
}

export async function deleteGarden(garden_id: number) {
    return sessionAPI('gardens/deleteGarden', { garden_id })
}

export async function updateGarden(garden: Garden) {
    return sessionAPI('gardens/updateGarden', garden)
}