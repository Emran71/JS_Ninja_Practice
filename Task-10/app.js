// Exercise 1 :
let max = function(a,b){
    return a>b? a: b;
}
let rmax =max(20,25);
console.log(rmax);

// Exercise 2 :
function arrayFromRange(num1,num2){
    let arr =[];
    if(num1>num2){
        for(let i=num2; i<=num1; i++){
            arr.push(i);
       }
    }
    for(let i=num1; i<=num2; i++){
       arr.push(i);
  }
  console.log(arr);
}
arrayFromRange(10,5); // [ 5, 6, 7, 8, 9, 10 ]
arrayFromRange(1,10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// Exercise 3 :
function showNumber(num1, num2) {
  let sum = 0;
  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  }
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  console.log(sum);
}
showNumber(2, 4);
showNumber(5, 2);

// Exercise 4 :
let numbers = [1,2,3,4];
function getMax(array){
    return array.reduce((a,b)=> a>b? a:b)
}
console.log(getMax(numbers));

// Exercise 5 :
function calculateAverage(arr){
     let sum = arr.reduce((a,b)=> a+b);
     let avg =Math.ceil( sum/arr.length);
     if(avg>= 91 && avg<=100){
        console.log("A");
     }else if(avg<= 90 && avg>=80){
        console.log("B");
     }else if(avg<= 79 && avg>=70){
        console.log("C");
     }else if(avg<= 69 && avg>=60){
        console.log("D");
     }else if(avg<60){
        console.log("F");
     }
}
calculateAverage([60,70,90,50,55]); // D
calculateAverage([83,70,90,50,55]); // C

// Exercise 6 :
const movie = { 
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b',
   };

function showProperties(obj){
    let result="";
    for(let index in obj){
        if(typeof obj[index]=== "string"){
            result = result +" "+ index +"-" +obj[index];
        }
    }
    return result;
}
console.log(showProperties(movie)); // title-a director-b


// Exercise 7 :
function countTruthy(arr){
    return arr.filter(Boolean).length;
}
console.log(countTruthy([0,null,undefined,'',2,3]));  // 2


// Exercise 8 :

function countOccurance(arr, searchelement){
    let count = 0;
    for(let val of arr){
        if(val === searchelement){
            count++;
        }
    }
    return count;
}
console.log(countOccurance([1,2,3,1], 1)); //2