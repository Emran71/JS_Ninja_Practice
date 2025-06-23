// Exercise-1:
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
function valTimesIndex(arr) {
    let result = arr.map(((item,index)=>{
        return item * index;
    }))
    console.log(result);
}
valTimesIndex([1,2,3]) // [ 0, 2, 6 ]
valTimesIndex([1,-2,-3]) // [0,-2,-6]


// Exercise-2:
// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the
//  odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).
function doubleOddNumbers(arr) {
     let result = arr.filter((element)=> element%2!=0)
     .map(element=> element*2)
     console.log(result);
}
doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []

// Exercise-3:
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the
//  first and last character of each string.
function showFirstAndLast(arr) {
    let result = arr.map((element)=>{
        return element[0]+element[element.length-1]
    })
    console.log(result);
}
showFirstAndLast(['obaydullah','Karim', 'miraz', 'kawsar', 'ruhi','udemy']) // ["oh", "km", "mz", "kr", 'ri', 'uy']
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']


// Exercise-4:
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns 
// the array passed to the function with the new key and value added for each object 
function addKeyAndValue(arr, key, value) {
      arr.forEach(person=>{
      person[key] = value;
    })
    console.log(arr);
}
addKeyAndValue([{name: 'Samim'}, {name: 'Miraz'}, {name: 'Matt'}, {name: 'Anam'}], 'title', 'instructor') 
// [{name: 'Samim', title:'instructor'}, {name: 'Miraz', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Anam', title:'instructor'}]

// Exercise-5:
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in the string. This function should be case insensitive so a
// lowercase letter and uppercase letter should count. You may use  reduce to solve the problem
function vowelCount(str) {
    let vowels ='aeiou';
    return str
    .toLowerCase()
    .split("")
    .reduce((characters, char)=>{
        if(vowels.includes(char)){
           characters[char] = (characters[char] || 0) +1;
        }
       return characters;
    },{})
}
console.log(vowelCount('samim')); // {a:1,i:1};
console.log(vowelCount('Tim') );// {i:1};
console.log(vowelCount('Matt') );// {a:1};
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};


// Exercise-6:
// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the 
// array is odd. If any of the values in the array are not odd, the function should return false.
function hasOnlyOddNumbers(arr) {
    let result = arr.every(number=>{
        return number%2!==0;
    })
    console.log(result);
}
hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false

// Exercise-7:
// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values
//  (more than one element in the array that has the same value as another). If there are any duplicates, the function 
//  should return false.
function hasNoDuplicates(arr) {
   return !arr.some((item, index) => arr.indexOf(item) !== index)   
}
console.log(hasNoDuplicates([1,2,3,1])); // false
console.log(hasNoDuplicates([1,2,3]) );// true

// Exercise-8:
// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and 
// returns the first found value in the array.
function findInObj(arr, key, searchValue) {
    let result =arr.find((element=>{
        return element[key] = searchValue;
    }))
    console.log(result);
}
findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, 
{first: 'Matt', last:"Lane"}, {first: 'Samim', last:"Hasan", isCatOwner: false}], 'isCatOwner', true) // { first: 'Elie', last: 'Schoppik', isCatOwner: true }


// Exercise-9:
// Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns
//  true if every single object in the array contains that value for the specific key. Otherwise it should return false.
var arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Anam', last:"Ahmed", isCatOwner: true}
]
function hasCertainValue(arr, key, searchValue) {
  let result = arr.every(element=> {
    return element[key]=== searchValue;
  });
  console.log(result);
}
hasCertainValue(arr,'title','Instructor') // true
hasCertainValue(arr,'first','Elie') // false

// Exercise-10:
// This one will be little bit challenging, you have to use first class function criteria
// Write a function called partition which accepts an array and a callback and returns an array with
//  two arrays inside of it. The partition function should run the callback function on each value in the array 
//  and if the result of the callback function at that specific value is true, the value should be placed in the 
//  first subarray. If the result of the callback function at that specific value is false, the value should be placed 
//  in the second subarray.
var arr = [1,2,3,4,5,6,7,8];
var names = ['Elie', 'Colt', 'Tim', 'Matt'];
function isEven(val){
    return val % 2 === 0;
}
function isLongerThanThreeCharacters(val){
    return val.length > 3;
}
function partition(arr, callback) {
    let first=[];
    let second =[];
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i])==true){
          first.push(arr[i])
        }else{
            second.push(arr[i])
        }
    }
    return [first,second];
}
console.log(partition(arr,isEven)); // [ [ 2, 4, 6, 8 ], [ 1, 3, 5, 7 ] ]
console.log(partition(names, isLongerThanThreeCharacters) );// [['Elie', 'Colt', 'Matt'], ['Tim']]

// Bonus Exercise :
// Write a function called extractValue which accepts an array of objects and a key and returns a new array 
// with the value of each object at the key.
var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Max'}]
function extractValue(arr, key) {
    let newArr = arr.map(ele=>{
        return ele[key];
    })
    console.log(newArr);
}
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Max']
