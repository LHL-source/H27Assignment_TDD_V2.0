//w? yes very good job!!
const corn = {
    name: "corn",
    yield: 30,
    salesPrice: 2,
    factors: {
        sun: {
            low: -20,
            medium: 0,
            high: 50,
        }, //sun
        wind: {
            low: 0,
            medium: -30,
            high: -60,
        }, //wind
    }, //fac
}; //corn
const pumpkin = {
    name: "pumpkin",
    yield: 4,
    salesPrice: 3,
    factors: {
        sun: {
            low: -30,
            medium: 0,
            high: 40,
        }, //sun
        wind: {
            low: 10,
            medium: -10,
            high: -20,
        }, //wind
    }, //Fac
}; //pumpkin
module.exports = { corn, pumpkin };