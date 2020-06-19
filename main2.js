const parentElement = document.querySelector('.Katas-list')

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

// kata 14
// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
const kata14Heading = document.createElement('h3')
kata14Heading.append('KATA 14')
parentElement.append(kata14Heading)

function kata(square, sampleArray) {
    let result = [];
    for (let index = 0; index <= sampleArray.length - 1; index++)
        result[index] = square(sampleArray[index]);
    // console.log(sampleArray[index])
    return result;
}
let square = function (x) {
    return x * x;
    let kata14results = document.createElement('p')
    kata14results.append(sampleArray[index])
    kata14Heading.append(kata14results)
}
let result = kata(square, sampleArray);
console.log(result);


// kata 15
// Display the sum of all the numbers from 1 to 20.
// const kata15Heading = document.createElement('h3')
// kata15Heading.append('KATA 15')
// parentElement.append(kata15Heading)

// let total = 0;
// for (let index = 0; index < sampleArray.length; index++) {
//     total += sampleArray[index] <= 20;
//     console.log(sampleArray[index])
//     let kata15results = document.createElement('p')
//     kata15results.append(sampleArray[index])
//     kata15Heading.append(kata15results)
// }

// kata 16
// Display the sum of all the elements in sampleArray.

// kata 17
// Display the smallest element in sampleArray.

// kata 18
// Display the largest element in sampleArray.