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

console.log(charCount('hello'))
console.log(charCount('This is my PIN number!'))
console.log(refactoredCharCount('hello'))
console.log(refactoredCharCount('This is my PIN number!'))