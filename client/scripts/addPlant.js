let addPlantForm = document.getElementById("add-plant-form");
if(addPlantForm) {
    addPlantForm.addEventListener("submit", addPlant);
}

async function addPlant(e) {
    e.preventDefault();
    const plant = {
        plant_name: document.getElementById("plant-name").value,
        plant_type: document.getElementById("plant-type").value,
        sun_level: document.getElementById("sun-level").value,
        water_level: document.getElementById("water-level").value,
        days_to_maturity: document.getElementById("days-to-maturity").value,
        edible: document.getElementById("edible").value,
        avg_height: document.getElementById("avg-height").value,
        uploader_id: document.getElementById("uploader-id").value
    }

    try {
        await fetch("/plants/createPlant", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plant)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }
    catch(error) {
        console.error(error);
    }
}