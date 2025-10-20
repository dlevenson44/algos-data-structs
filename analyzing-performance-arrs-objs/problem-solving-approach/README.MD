## Problem Solving Approach

- Algorithms are processes or sets of steps to accomplish a certain task

#### Understand the Problem
- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What outputs should come from the solution?
- Can the outputs be determined from the inputs?
- How should I label important pieces of data that are part of the problem?

#### Explore concrete examples
- Coming up with examples can help you understand problem better
- Examples provide sanity checks that your eventual solution works how it should
- User Stores-- what is the user's experience relating to the challenge?
- Start with 2-3 simple examples with the input and output
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

#### Break it down
- Explicitly write out steps you need to take
  - This helps you think about code you will write before you write it
  - Helps catch any lingering conceptual issues or misunderstandings before diving in

#### Solve/Simplify
- If you can't solve the problem, start by solving a more simple problem!
- Find the core difficulty in what you're trying to do
- Temporarily ignore it!
- Write a simplified solution without it
- Then come back and incorporate that difficulty in

#### Look back and refactor
- Can you check the result?
- Can you dereive the result differently?
- Can you understand it at a glance?
- Can you use the result/method for some other problem
- Can you improve the solution's performance?
- Can you think of other ways to refactor?
- How have other people solved this problem?

#### Challenge
- Write a function that takes a string and returns the count of all alphanumeric characters in the string
```js
function charCount(str) {
  const result = {}
  for (let i =0; i < str.length; i++) {
    const char = str[i].toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char] ++
      } else {
        result[char] = 1
      }
    }
  }

  return result
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0)
  if (!(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code < 91) && // upper alpha
    !(code > 96 && code < 123)) { //lower alpha
    return false
  }
  return true
}

function refactoredCharCount(str) {
  const result = {}
  for (let char of str) {
    char = char.toLowerCase()
    // we can replace regex with a function that checks charCodeAt
    // then set up boundaries with the charCode values so ensure it's a numeric, upper alpha, or lower alpha
    if (isAlphaNumeric(char)) {
      // if the result[char] exists we increment its value, otherwise we assign its value as 1
      result[char] = ++result[char] || 1
    }
  }

  return result
}

charCount('hello')
charCount('This is my PIN number!')
```
