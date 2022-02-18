export const store = {
    state: {
        name: "",
        statusIndicator: "fine",
        foodIndicator: "100%",
        ageIndicator: 3,
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
        foodPercent: {
            1: 1,
            20: 20,
            40: 40,
            60: 60,
            80: 80,
            100: 100
        },
        age: 0
    }
}





