//select the table body element


//run the script on DOMContentLoaded
document.addEventListener('DOMContentLoaded', getPlants);


//fetch all plants

async function getPlants() {
    const plantTableBody = document.getElementById('plant-table-body');
    console.log('Fetching all plants');
    if (!plantTableBody) {
        console.error('No table body element found');
        return;
    }
    try {
        const response = await fetch("/plants/getAllPlants");
        const data = await response.json();
        console.log("Retrieved all plants. Amount: ", data.length);
        data.forEach(plant => {
            const row = document.createElement('tr');
            
            const plantNameCell = document.createElement('td');
            plantNameCell.textContent = plant.plant_name;
            row.appendChild(plantNameCell);
            
            const plantTypeCell = document.createElement('td');
            plantTypeCell.textContent = plant.plant_type;
            row.appendChild(plantTypeCell);
            
            const sunLevelCell = document.createElement('td');
            sunLevelCell.textContent = plant.sun_level;
            row.appendChild(sunLevelCell);
            
            const waterLevelCell = document.createElement('td');
            waterLevelCell.textContent = plant.water_level;
            row.appendChild(waterLevelCell);
            
            const daysToMaturityCell = document.createElement('td');
            daysToMaturityCell.textContent = plant.days_to_maturity;
            row.appendChild(daysToMaturityCell);
            
            const edibleCell = document.createElement('td');
            edibleCell.textContent = plant.edible;
            row.appendChild(edibleCell);
            
            const avgHeightCell = document.createElement('td');
            avgHeightCell.textContent = plant.avg_height;
            row.appendChild(avgHeightCell);
            
            const uploaderIdCell = document.createElement('td');
            uploaderIdCell.textContent = plant.uploader_id;
            row.appendChild(uploaderIdCell);
            
            plantTableBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
}