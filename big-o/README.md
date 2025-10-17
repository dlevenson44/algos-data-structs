## Big O Notation
- A way to generalize and compare code in its performance
- Important to have precise vocab to talk about how code performs
- Useful for discussing trade-offs between approaches
- Helps understand ineffecient code and better find bottlenecks
- A formalized way to talk about runtime of an algorithm growth as it relates to inputs growth, caring more about broad patterns
- Algorithm is O(f(n)) if the number of simple ops done by computer is eventually less than a constant times f(n) as n increases
    - f(n) could be linear (f(n) = n)
    - f(n) could be quadratic (f(n) = n^2)
    - f(n) could be constant (f(n) = 1)
    - f(n) could be something totally different

#### Timing Code
- Better can mean speed, memory use, or readability
- Can use below example to calculate speed... but an inconsistent way to measure time
```js
function addUpTo(n) {
    return n * (n + 1) / 2
}
const time1 = performance.now()
addUpTo(1000000)
const time2 = performance.now()
// output in seconds
// different machines will record different times though
// same machine will record different times!
console.log(`Time Elapsed: ${(time1 - time2) / 1000} seconds`)
```
- We write a function that finds the sum of all numbers from 1 up to and including a given number x
```js
// O(n)-- number of operations bound by n input
function addUpToA(n) {
    let total = 0
    for (let i = 1; i <= n; i++>) {
        total += i;
    }
    return total
}

// same function below but re-written
// O(1)
function addUpToB(n) {
    // 6 * (6 + 1) / 2 = 6 * 7 / 2 = 42 / 2 = 21
    // 3 * (3 + 1) / 2 = 3 * 4 / 2 = 12 / 2 = 6
    return n * (n + 1) / 2;
}

addUpTo(6) //output is 21
addUpTo(3) //output is 6
```

#### Counting Operations
- Instead of using time, we can count number of simple operations computer has to perform
    - This is a constant result as opposed to using exact times
- In above examples...
    - `addUpToA` function has 1 addition operation and 1 equals assignment operation for each iteration with `total += i`... 2 operations per iteration
        - we also have `i++` as an addition and assignment which runs each iteration, as well as `i <= n` which runs a comparison for each itearation... this brings us to 5 operations per iteration
        - we also have `let total = 0` and `let i = 1` which are each so another 2 operations TOTAL since they are only defined ONCE
        - that's 5 operations for each iteration with 2 static ones so...
        - this has `5n + 2` operations
            - `5n` from 5 operations per iteration
            - `2` from 2 static operations
    - `addUpToB` function has 1 multiplication, 1 addition, and 1 division, so 3 simple operations
        - `n` value does not matter, we run the same number of operations no matter what

```js
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
```

#### Simplifying Big O Expressions
- Constants don't matter
    - O(2n) would just be simplified to O(n) 
    - O(500) would just be O(1) since it's constant run time
    - O(13n^2) would just be O(n^2)
    - O(n^2+5n+8) would be O(n^2)
- The reason for the above is that the constants don't really impact the steepness of the slope
- We can use the more simplified terms to represent the slope to paint a more general picture while more simply explaining the differences in results
###### ********** Shorthands ***********
- Arithmetic operations are constant... constant time to run the operation, like addition or subtraction
- Variable assignment is constant
- Accessing elements in an array by index or object by key is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens in the loop


#### Space Complexity
- Covers how much additional memory we need to allocate for the code
- Auxiliary space complexity: refers to space required by the algorithm, not including space taken by the inputs
- Most primitives are constant space-- bools, nums, undefined, null
- Strings require O(n) space based on length of the string
- Reference types, objects/arrays, are usually O(n) for similar reason reason... number of keys/elements varies


#### Logarithms
- The inverse of exponentiation
- log2(value) = exponent --> 2^exponent = value
- log2(8) = 3... 2 to what power = 8? 2 * 2 * 2 = 8, so log2(8) is 3
- Certain searching algorithms have logarithmic time complexity
- Efficient sorting algorithms involve logs
- Recursion sometimes involves log space complexity
