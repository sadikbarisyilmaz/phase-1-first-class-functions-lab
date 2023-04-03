// Code your solution in this file!
// const drivers = [1,2,3,4,5]

const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function (drivers) {

    return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function (int) {

    const fareMultiplier = () => int * int
    return fareMultiplier
    
}

const fareDoubler = (int) => int * 2
const fareTripler = (int) => int * 3


const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers)
}







