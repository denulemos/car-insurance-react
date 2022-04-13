export const LABELS = [
    {id: 1, name: "Europe"},
    {id: 2, name: "Asia"},
    {id: 3, name: "North America"},
]

// We create an array with the last 20 years dinamically
const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (val, index) => YEARMAX - index);

export const PLANS = [
    {id: 1, name: "Basic"},
    {id: 2, name: "Premium"},
]