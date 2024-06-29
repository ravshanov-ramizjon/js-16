const car = {
    model: "x7",
    marka: "BMW",
    year: 2024,
    price: 120000,
    details: {
        horsepower: 600,
        seats: 5,
        drivetrain: 'FWD'
    }
}

const user = {
    name: "Jaxongir",
    surname: "Amonov",
    passport: {
        number: 1111111,
        serries: "AC",
    },
    age: 25,
    isMarried: true,
    address: "Sogdiana",
    wifes: ["Малика", "Ситора", "Сабина", "Рамиз"]
}
const assignCar = Object.assign({}, car, {user})
const keysCar = Object.keys(assignCar)
const valuesCar = Object.values(assignCar)
const entriesCar = Object.entries(assignCar)

console.log(assignCar, keysCar, valuesCar, entriesCar);