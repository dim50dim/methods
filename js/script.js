//////////////////11111111111
let arr11 = [1, 2, 3];
let arr12 = [4, 5, 6];
let array = arr11.concat(arr12);

console.log(array);
////////222222222222
let arr2 = [1, 2, 3];

arr2.reverse();
console.log(arr2);
///////333333333333

let arr3 = [1, 2, 3];

arr3.push(4, 5, 6);
console.log(arr3);

///////////44444444
let arr4 = [1, 2, 3];

arr4.unshift(4, 5, 6);
console.log(arr4);
//////////5555555555
let arr5 = ['js', 'css', 'jq'];

console.log(arr5.indexOf(0));

////////////6666666666666

///////////////77777777777777
let arr7 = [17, 42, 73, 4, 5];
arr7.splice(0,2,1, 2, 3);
console.log(arr7);
////////////////888888888
let arr8 = [17, 42, 73, 4, 5];
arr8.splice(0, 3);

console.log(arr8);
/////////////99999999999
let arr9 = [1, 2, 3, 4, 5];
    arr9.splice(1, 2);
console.log(arr9);
////////////10 10 10 10 10 10 10 10 10 10 
let arr10 = [1, 2, 3, 4, 5];
    arr10.splice(0,1, 2, 3, 4);
     arr10.splice(3,4);

console.log(arr10);
/////////////11 11 11 11 11 11 11 11 11 
let arr111 = [1, 2, 3, 4, 5];
   arr111.splice(2, 0, 'a', 'b', 'c');
   
   console.log(arr111);
   ///////////////////////12 12 12 12 12 12 12 12 12 12 
   let ar12 = [1, 2, 3, 4, 5];
   ar12.splice(1, 0, 'a', 'b');
   ar12.splice(6, 0, 'c');
   ar12.push('e');
   console.log(ar12);


//////////13 13 13 13 13 13 13 13 13 13 13 
let arr13 = [3, 4, 1, 2, 7];

function compare(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1; 
  }
  arr13.sort(compare);
  console.log(arr13);

/////////////////14  14 14 14 14 14 14 
arr14 = [5, 6, 7, 8, 9];
let value = arr14.reduce((sum, current) => sum + current, 0);
console.log(value);

//////////////////////15 15 15 15 15 15 
let arr15 = [5, 6, 7, 8 , 9];
   let square = arr15.map(a => a * a);
   console.log(square);
   //////////////////16 16 16 16 16 16 16 

   let arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
   let ar16 = arr16.filter(item => item < 0);
    console.log(ar16);

    /////////////////17 17 17 17 17 17 17 17 17 17 17 17 17
    let arr17 = [1,-3, 5, 6,-7, 8, 9,-11];
    let ar17 = arr17.filter(item => item % 2 === 0);

       console.log(ar17);

       /////////////////20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
       let arr20 =  [5,-3, 6,-5, 0,-7, 8, 9];
        let index = 0;
         let ar20 = arr20.filter(item => item < 0);
            
            console.log(ar20);