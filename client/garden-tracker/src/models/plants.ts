import { api } from './myFetch';

export interface Plant {
    plant_id: number;
    plant_name: string;
    plant_type: string;
    sun_level: number;
    water_level: number;
    days_to_maturity: number;
    edible: string;
    avg_height: number;
    uploader_id: number;
}

export async function getPlants(): Promise<Plant[]> {
    return await api('plants/getAllPlants');
}


export async function createPlant(plant: Plant): Promise<Plant> {
    return await api('plants/createPlant', plant);
}

export async function updatePlant(plant: Plant): Promise<Plant> {
    return await api('plants/updatePlant', plant);
}

export async function deletePlant(plant_id: number): Promise<void> {
    return await api('plants/deletePlant', { plant_id });
}

export async function getPlantById(plant_id: number): Promise<Plant> {
    return await api('plants/readPlant', { plant_id });
}

export async function getPlantsByUserId(user_id: number): Promise<Plant[]> {
    return await api('plants/getPlantsByUserId', { user_id });
}

export async function seachPlantsByName(name: string): Promise<Plant[]> {
    return await api('plants/searchPlantsByName', { name });
}
