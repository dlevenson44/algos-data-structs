## Analyzing Performance of Arrays and Objects

#### Objects
- Unordered data structures stored in key-value pairs
- When to Use Objects
  - When you don't need order
  - When you need fast access or insertion/removal
    - Insertion O(1)
    - Removal O(1)
    - Searching O(n)
    - Access O(1)
  - Common methods and their Big O Notation
    - Object.keys O(n)
    - Object.values O(n)
    - Object.entries O(n)
    - hasOwnProperty O(1)
      - We _access_ the object to check if a property exists on the object or not
  
#### Arrays
- Ordered lists containing different data types as elements, with each element being assigned its index
- Use arrays when you need order
- Insertion big-O can vary
  - Inserting at end of array is O(1) because we are always adding in the same position
  ```js
  //              0          1          2
  let names = ["Michael", "Melissa", "Andrea"]
  names.push("Raj") // this inserts at end of array with new index of 3
  ```
  - Inserting at beginning of array means every element in the array needs to be re-indexed, O(n)
    - In below example, we add Raj to start of Array, so he takes the 0 index from Michael... that index takes it from 1, and so on
  ```js
  names.unshift("Raj")
  ```
- Removal big-O can vary
  - Removing at the beginning of the array has the same re-indexing impact-- each elements position needs to be recalibrated within the array, O(n)
- Searching is O(n)
- Access is O(1)
- Big O of Array Operations
  - push O(1)
  - pop O(1)
  - shift O(n)
  - unshift O(n)
  - concat O(n)
  - slice O(n)
  - splice O(n)
  - sort O(n*logN)
  - forEach, map, reduce, filter O(n)

