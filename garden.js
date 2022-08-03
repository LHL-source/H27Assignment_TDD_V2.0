//start getYieldForPlant
const getYieldForPlant = (input, factor) => {
    if (!factor) {
        return input.yield
    };

    //add only the effect of sun
    let sun;
    let wind;
    if (!input.factors.sun) {
        sun = 1;
    } else {
        switch (factor.sun) {
            case "low":
                sun = (100 + input.factors.sun.low) / 100;
                break;
            case "medium":
                sun = (100 + input.factors.sun.medium) / 100;
                break;
            case "high":
                sun = (100 + input.factors.sun.high) / 100;
                break;
            default:
                sun = 1;
        };
    };

    //add the effect of only wind
    if (!input.factors.wind) {
        wind = 1;
    } else {
        switch (factor.wind) {
            case "low":
                wind = (100 + input.factors.wind.low) / 100;
                break;
            case "medium":
                wind = (100 + input.factors.wind.medium) / 100;
                break;
            case "high":
                wind = (100 + input.factors.wind.high) / 100;
                break;
            default:
                wind = 1;
        };

    };

    const yieldPerPlant = input.yield * sun * wind;
    return parseFloat(yieldPerPlant.toFixed(2));
};
//end getYieldForPlant-- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//start getYieldForCrop W? yes 1 aug 22 good job-----------------------------------------
const getYieldForCrop = (input, factor) => {
    const yieldForOnePlant = getYieldForPlant(input.crop, factor);
    const yieldPerCrop = yieldForOnePlant * input.numCrops;
    return parseFloat(yieldPerCrop.toFixed(2));
};
//end getYieldForCrop

//start getTotalYield 
const getTotalYield = (input, factor) => {

    const yieldForPerCrop = input.crops.map((crop) =>
        getYieldForCrop(crop, factor));

    const totalOfYield = yieldForPerCrop.reduce((acc, cur) => acc + cur);
    return parseFloat(totalOfYield.toFixed(2));

};
//end getTotalYield
//start getRevenueForCrop 
const getRevenueForCrop = (input, factor) => {
    const revenueForOnePlant = input.crop.salesPrice * getYieldForPlant(input.crop, factor);
    const revenueForCrop = revenueForOnePlant * input.numCrops;
    return revenueForCrop;
};
//end getRevenueForCrop
//start getCostForCrop 
const costsForOnePlant = 1;
const getCostForCrop = (input) => {

    const totalAmountCosts = input.numCrops * costsForOnePlant;
    return totalAmountCosts;

};
//end getCostForCrop
//start getProfitForCrop 
const getProfitForCrop = (input, factor) => {

    const profitCrop = getRevenueForCrop(input, factor) - getCostForCrop(input);
    return parseFloat(profitCrop.toFixed(2));

};

//start getTotalProfit
const getTotalProfit = (input, factor) => {
    const profitPerCrop = input.map((crop) => getProfitForCrop(crop, factor));
    const totalProfit = profitPerCrop.reduce((accum, current) => accum + current);

    return parseFloat(totalProfit.toFixed(2));

}; //const


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getRevenueForCrop,
    getCostForCrop,
    getProfitForCrop,
    getTotalProfit
};