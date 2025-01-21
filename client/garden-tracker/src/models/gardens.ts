import { api } from './myFetch'

export interface Garden {
    garden_id: number;
    garden_name: string;
    location: string;
    sun_level: number;
    owner_id: number;
}

export async function getGardens() {
    return api('gardens/getAllGardens')
}

export async function getGarden(garden_id: number) {
    return api('gardens/readGarden', { garden_id })
}

export async function createGarden(garden: Garden) {
    return api('gardens/createGarden', garden)
}

export async function deleteGarden(garden_id: number) {
    return api('gardens/deleteGarden', { garden_id })
}

export async function updateGarden(garden: Garden) {
    return api('gardens/updateGarden', garden)
}