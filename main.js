const parentElement = document.querySelector('.Katas-list')

// kata 1: Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)
const kata1Heading = document.createElement('h3')
kata1Heading.append('KATA 1')
parentElement.append(kata1Heading)

for (let i = 1; i <= 20; i += 1) {
    console.log(i)
    let kata1results = document.createElement('p')
    kata1results.append(i)
    kata1Heading.append(kata1results)
}

// kata 2: Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
const kata2Heading = document.createElement('h3')
kata2Heading.append('KATA 2')
parentElement.append(kata2Heading)

for (let i = 2; i <= 20; i += 2) {
    console.log(i)
    let kata2results = document.createElement('p')
    kata2results.append(i)
    kata2Heading.append(kata2results)
}

// kata 3
// Display the odd numbers from 1 to 20.(1, 3, 5, …, 17, 19)
const kata3Heading = document.createElement('h3')
kata3Heading.append('KATA 3')
parentElement.append(kata3Heading)

for (let i = 1; i <= 20; i += 2) {
    console.log(i)
    let kata3results = document.createElement('p')
    kata3results.append(i)
    kata3Heading.append(kata3results)
}

// kata 4
// Display the multiples of 5 up to 100.(5, 10, 15, …, 95, 100)
const kata4Heading = document.createElement('h3')
kata4Heading.append('KATA 4')
parentElement.append(kata4Heading)
for (let i = 5; i <= 100; i += 5) {
    console.log(i)
    let kata4results = document.createElement('p')
    kata4results.append(i)
    kata4Heading.append(kata4results)
}

// kata 5
// Display the square numbers from 1 up to 100.(1, 4, 9, …, 81, 100)
const kata5Heading = document.createElement('h3')
kata5Heading.append('KATA 5')
parentElement.append(kata5Heading)
for (let i = 1; i <= 100; i += 1) {
    const isSquare = Number.isInteger(Math.sqrt(i));
    if (isSquare) {
        console.log(i)
        let kata5results = document.createElement('p')
        kata5results.append(i)
        kata5Heading.append(kata5results)
    }
}
// kata 6
// Display the numbers counting backwards from 20 to 1.(20, 19, 18, …, 2, 1)
const kata6Heading = document.createElement('h3')
kata6Heading.append('KATA 6')
parentElement.append(kata6Heading)
for (let i = 20; i >= 1; i -= 1) {
    console.log(i)
    let kata6results = document.createElement('p')
    kata6results.append(i)
    kata6Heading.append(kata6results)
}

// kata 7
// Display the even numbers counting backwards from 20 to 1.(20, 18, 16, …, 4, 2)
const kata7Heading = document.createElement('h3')
kata7Heading.append('KATA 7')
parentElement.append(kata7Heading)
for (let i = 20; i >= 2; i -= 2) {
    console.log(i)
    let kata7results = document.createElement('p')
    kata7results.append(i)
    kata7Heading.append(kata7results)
}

// kata 8
// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
const kata8Heading = document.createElement('h3')
kata8Heading.append('KATA 8')
parentElement.append(kata8Heading)

for (let i = 19; i >= 1; i -= 2) {
    console.log(i)
    let kata8results = document.createElement('p')
    kata8results.append(i)
    kata8Heading.append(kata8results)
}

// kata 9
// Display the multiples of 5, counting down from 100 to 1.(100, 95, 90, …, 10, 5)

const kata9Heading = document.createElement('h3')
kata9Heading.append('KATA 9')
parentElement.append(kata9Heading)
for (let i = 100; i >= 5; i -= 5) {
    console.log(i)
    let kata9results = document.createElement('p')
    kata9results.append(i)
    kata9Heading.append(kata9results)
}

// kata 10
// Display the square numbers, counting down from 100.(100, 81, 64, …, 4, 1)
const kata10Heading = document.createElement('h3')
kata10Heading.append('KATA 10')
parentElement.append(kata10Heading)
for (let i = 100; i >= 1; i -= 1) {
    const isSquare = Number.isInteger(Math.sqrt(i));
    if (isSquare) {
        console.log(i)
        let kata10results = document.createElement('p')
        kata10results.append(i)
        kata10Heading.append(kata10results)
    }
}

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
// kata 11
// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
const kata11Heading = document.createElement('h3')
kata11Heading.append('KATA 11')
parentElement.append(kata11Heading)
for (let index = 0; index < sampleArray.length; index += 1) {
    console.log(sampleArray[index])
    let kata11results = document.createElement('p')
    kata11results.append(sampleArray[index])
    kata11Heading.append(kata11results)
}

//kata 12
// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
const kata12Heading = document.createElement('h3')
kata12Heading.append('KATA 12')
parentElement.append(kata12Heading)
for (let index = 0; index < sampleArray.length; index += 1) {
    console.log(sampleArray[index])
    if (sampleArray[index] % 2 === 0) {
        let kata12results = document.createElement('p')
        kata12results.append(sampleArray[index])
        kata12Heading.append(kata12results)
    }
}
// kata 13
// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
const kata13Heading = document.createElement('h3')
kata13Heading.append('KATA 13')
parentElement.append(kata13Heading)
for (let index = 1; index < sampleArray.length; index += 1) {
    console.log(sampleArray[index])
    if (sampleArray[index] % 2 === 1) {
        let kata13results = document.createElement('p')
        kata13results.append(sampleArray[index])
        kata13Heading.append(kata13results)
    }
}

// kata 14
// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
const kata14Heading = document.createElement('h3')
kata14Heading.append('KATA 14')
parentElement.append(kata14Heading)

for (let index = 0; index < sampleArray.length; index += 1) {

    let square = sampleArray[index] * sampleArray[index]

    let kata14results = document.createElement('p')
    kata14results.append(square)
    kata14Heading.append(kata14results)
}


// kata 15
// Display the sum of all the numbers from 1 to 20.
const kata15Heading = document.createElement('h3')
kata15Heading.append('KATA 15')
parentElement.append(kata15Heading)

for (let index = 0; index < sampleArray.length; index += 1) {
    let sum = 0
    let sum15 = sampleArray[index]
    let innerArray = sum15.toString().split("")
    for (let innerindex = 0; innerindex < innerArray.length; innerindex += 1) {
        sum += Number(innerArray[innerindex])
    }
    let kata15results = document.createElement('p')
    kata15results.append(sum)
    kata15Heading.append(kata15results)
}


// kata 16
// Display the sum of all the elements in sampleArray.
const kata16Heading = document.createElement('h3')
kata16Heading.append('KATA 16')
parentElement.append(kata16Heading)

let sum = 0
for (let index = 0; index < sampleArray.length; index += 1) {
    sum += sampleArray[index]
}
let kata16results = document.createElement('p')
kata16results.append(sum)
kata16Heading.append(kata16results)


// kata 17
// Display the smallest element in sampleArray.
const kata17Heading = document.createElement('h3')
kata17Heading.append('KATA 17')
parentElement.append(kata17Heading)
let smallest = sampleArray[0]
for (let index = 0; index < sampleArray.length; index += 1) {
    if (sampleArray[index] < smallest) {
        smallest = sampleArray[index]
        console.log(smallest)
    }
}
let kata17results = document.createElement('p')
kata17results.append(smallest)
kata17Heading.append(kata17results)

// kata 18
// Display the largest element in sampleArray.const kata16Heading = document.createElement('h3')

const kata18Heading = document.createElement('h3')
kata18Heading.append('KATA 18')
parentElement.append(kata18Heading)
let largest = sampleArray[0]
for (let index = 0; index < sampleArray.length; index += 1) {
    if (sampleArray[index] > largest) {
        largest = sampleArray[index]
        console.log(largest)
    }
}
let kata18results = document.createElement('p')
kata18results.append(largest)
kata18Heading.append(kata18results)