const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); 

// Output: [1, 2, 3, 4, 5]