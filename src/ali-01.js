/*
Q:
input: [ [1,2], [3,4], [5,6] ] 
output:
1 3 5
1 3 6
1 4 5
1 4 6
2 3 5
2 3 6
2 4 5
2 4 6
*/

const arr = [ [1,2], [3,4], [5,6] ];

for(var i=0;i< arr[0].length ** arr.length;i++){
  console.log(
    arr[0][ +((i & 0b100) === 0b100) ],
    arr[1][ +((i & 0b010) === 0b010) ], 
    arr[2][ +((i & 0b001) === 0b001) ],
  );
}