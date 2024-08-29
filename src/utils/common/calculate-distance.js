// Function to calculate the distance between two graphical points using the Haversine Formula
function calculate(lat1, lon1, lat2, lon2) {
    const radius = 6371; // Radius of Earth in Kilometers
    const radian = Math.PI / 180; // Conversion factor for degrees to radians

    const a =
        0.5 -
        Math.cos((lat2 - lat1) * radian) / 2 +
        (Math.cos(lat1 * radian) *
            Math.cos(lat2 * radian) *
            (1 - Math.cos((lon2 - lon1) * radian))) /
            2;

    return 2 * radius * Math.asin(Math.sqrt(a)); // Returning distance in kilometers
}

module.exports = { calculate };
