// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let firstTwo=[array[0],array[1]]
    return firstTwo
}


const returnLastTwoDrivers = function(array){
    let lastTwo = []
    let len = array.length
    lastTwo[0]=array[len-2]
    lastTwo[1]=array[len-1]
    return lastTwo
}

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    const fn = function(fare){
        return fare*multiplier
    }
    return fn
}
const fareDoubler= createFareMultiplier(2)
const fareTripler= createFareMultiplier(3)

function selectDifferentDrivers(driversArray, fn){
    let drivers = fn(driversArray)
    return drivers    
}
























