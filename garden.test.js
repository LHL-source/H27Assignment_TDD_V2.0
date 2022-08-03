const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getRevenueForCrop,
    getCostForCrop,
    getProfitForCrop,
    getTotalProfit

} = require("./garden");

const {
    corn,
    pumpkin
} = require("./Vegetable");
//getYieldForPlant  ----------------------------------------------
describe("getYieldForPlant No Environment factors ", () => {

    test("Get yield for plant with no environment factors", () => {

        const cucumber = {
            name: "cucumber",
            yield: 5,
        };

        expect(getYieldForPlant(cucumber)).toBe(5);
    });


    test(" getYieldForplant with only 1 factor in this case sun high", () => {
        const environmentFactors = {
            sun: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });


    test("getYieldForPlant with 2 factors sun medium and wind high", () => {
        const environmentFactors = {
            sun: "medium",
            wind: "high",
        };
        expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(3.20);

    });

});

//end getYieldForplant--------------------------------------------

//start getYieldForCrop--------------------------------------------
describe("testing getYieldForCrop", () => {
    test("Get yield for crop simple", () => {
        const input = {
            crop: corn,
            numCrops: 4,
        }
        expect(getYieldForCrop(input)).toBe(120.00);

    });

    test("Get yield for crop sun low , wind medium", () => {
        const environmentFactors = {
            sun: "low",
            wind: "medium",
        };

        const crops = {
            crop: pumpkin,
            numCrops: 8,
        }
        expect(getYieldForCrop(crops, environmentFactors)).toBe(20.16);

    });
});
// end getYieldForCrop
//start getTotalYield

describe("get total yield with multiple crops", () => {

    test("total yield with multiple crops", () => {
        const crops = [
            { crop: corn, numCrops: 9 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(278);
    });

    test("total yield with numCrops is 0 amount", () => {
        const crops = [
            { crop: corn, numCrops: 0 },

        ];
        expect(getTotalYield({ crops })).toBe(0);
    });

    test("total yield with multiple crops en 1 factor sun high", () => {
        const environmentFactors = {
            sun: "high",
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 3 },
        ];


        expect(getTotalYield({ crops }, environmentFactors)).toBe(241.80);
    });

    test("total yield with multiple crops and factors sun high wind medium", () => {
        const environmentFactors = {
            sun: "high",
            wind: "medium"
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 3 },
        ];


        expect(getTotalYield({ crops }, environmentFactors)).toBe(172.62);
    });

});
//end totalYieldForCrops
//start getRevenueForCrop
describe("get revenue for crops", () => {
    test('get revenue for crop factor sun high', () => {
        const environmentFactors = {
            sun: "high",
        };

        const crops = {
            crop: corn,
            numCrops: 7,
        };

        expect(getRevenueForCrop(crops, environmentFactors)).toBe(630.00);
    });


});
//end getRevenueForCrop

//start  getCostForCrop
describe("get revenue for crop", () => {
    test("test costs for crop", () => {
        const crops = {
            numCrops: 11,
        };
        expect(getCostForCrop(crops)).toBe(11.00);

    })
});
//end getCostForCrop
//start getProfitForCrop
describe("get profit for crop sun low, wind medium", () => {
    test("test get profit for crop sun low , wind medium", () => {
        const crops = {
            crop: pumpkin,
            numCrops: 13,
        };
        const environmentFactors = {
            sun: "low",
            wind: "medium",
        };
        expect(getProfitForCrop(crops, environmentFactors)).toBe(85.28);

    });
});
//end getProfitForCrop
//start getTotalProfit 
describe("get total profit", () => {
    test("get total profit for multiple crops with sun low, wind medium", () => {
        const crops = [
            { crop: corn, numCrops: 4 },
            { crop: pumpkin, numCrops: 13 },
        ];

        const environmentFactors = {
            sun: "low",
            wind: "medium",
        };
        expect(getTotalProfit(crops, environmentFactors)).toBe(215.68);
    });

});
//end getTotalProfit