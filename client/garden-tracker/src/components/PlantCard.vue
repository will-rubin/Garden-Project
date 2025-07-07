<script setup>
    defineProps(['plant']);
</script>

<template>
<div class="card">
    <div class="card-header">
        <div class="card-header-title">
            <h2>{{ plant.plant_name }}</h2>
        </div>
    </div>
    <div class="card-content">
        <div class="content">
            <div class="table-container">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{{ plant.name }}</td>
                        </tr>
                        <tr>
                            <td>Plant ID</td>
                            <td>{{ plant.plant_id }}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{{ plant.plant_type }}</td>
                        </tr>
                        <tr>
                            <td>Sun Level</td>
                            <td>{{ plant.sun_level }}</td>
                        </tr>
                        <tr>
                            <td>Water Level</td>
                            <td>{{ plant.water_level }}</td>
                        </tr>
                        <tr>
                            <td>Days to Maturity</td>
                            <td>{{ plant.days_to_maturity }}</td>
                        </tr>
                        <tr>
                            <td>Edible</td>
                            <td>{{ plant.edible }}</td>
                        </tr>
                        <tr>
                            <td>Average Height</td>
                            <td>{{ plant.avg_height }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>


<style>
.card {
    margin: 5px;
}

.card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
}
.card-header-title {
    background-color:#26a69a;
    border-radius: 5px;
    justify-content: center;
    font-size: 1.5em;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}


</style>