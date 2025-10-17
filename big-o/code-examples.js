// O(n)-- number of operations bound by n input
function addUpToA(n) {
    let total = 0
    // runs iteration for n times
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
}

// O(1)
function addUpToB(n) {
    // 6 * (6 + 1) / 2 = 6 * 7 / 2 = 42 / 2 = 21
    // 3 * (3 + 1) / 2 = 3 * 4 / 2 = 12 / 2 = 6
    return n * (n + 1) / 2;
}

addUpToA(6) //output is 21
addUpToA(3) //output is 6
addUpToB(6) //output is 21
addUpToB(3) //output is 6

// O(n) since it's operations is dependent on n value
function countUpAndDown(n) {
    console.log('going up')
    // as n grows so does loop
    for (let i = 0; i < n; i ++) {
        console.log(i)
    }
    console.log('at the top, going back down')
    // as n grows so does loop
    for (let j = n - 1; j >= 0; j--) {
        console.log(j)
    }
    console.log('back at the bottom, bye!')
}

countUpAndDown(10)

function printAllPairs(n) {
    // loop is based off n, so O(n)
    for (let i = 0; i < n; i++) {
        // loop is also based off n, so O(n)
        // O(n) nested inside of O(n) is equal to O(n*n), aka O(n^2)
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

printAllPairs(5)


