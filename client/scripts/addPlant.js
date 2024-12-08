let addPlantForm = document.getElementById("add-plant-form");
if(addPlantForm) {
    addPlantForm.addEventListener("submit", addPlant);
}

function addPlant(e) {
    e.preventDefault();
    const plant = {
        name: document.getElementById("plant-name").value,
        type: document.getElementById("plant-type").value,
        variety: document.getElementById("plant-variety").value,
        description: document.getElementById("plant-description").value
    }

    console.log(plant);
    let greeting = document.getElementById("greeting");
    greeting.innerHTML = `You have added ${plant.name}!!`
}