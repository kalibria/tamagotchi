export const config = {
    state: {
        name: "",
        initialStatus: "fine",
        initialFoodPercent: "40",
        initialAge: 0
    },
    indicators: {
        states: {
            fine: {
                uiText: "fine",
                nextStatus:["sick", "hungry", "dead"]
            },
            sick: {
                uiText: "sick",
                prevStatus: ["fine"],
                nextStatus: ["hungry", "dead"]
            },
            hungry: {
                uiText: "hungry",
                prevStatus: ["fine", "sick"],
                nextStatus: ["dead"]
            },
            dead: {
                uiText: "dead",
                prevStatus: ["fine", "sick", "dead"]
            }
        },
        foodPercents: {
            noFood: 1,
            veryLittle: 20,
            notSoMuch: 40,
            moreThanAHalf: 60,
            almostFull: 80,
            full: 100
        },
        age: {
            maxAge: 5
        }
    }
}





