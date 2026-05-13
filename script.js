// 

// set player mark X or O

const selectPlayer = 'X'
// const player = choose X or O then set not selected one to computer 
if(selectPlayer == 'X'){
    computerPlayer = 'O'
}
else{
    computerPlayer = 'X'
}
// the player will start the game
// change the cell value wich clicked by player to plyer marker
// call the check function and check if the player mark is equal to statements
// next move to computer to empty cells
// call the check function and check if the player mark is equal to statements
// game over when all cells are filled with either x or o

const demoo = [[0,0,0],[0,0,0],[0,0,0]]
const array1 = []
const array2 = []

demoo[0][0] = 'o';  //id selector to the cell and change cell value on the array
demoo[0][1] = 'x';
demoo[0][2] = 'x';
demoo[1][0] = 'o';
demoo[1][1] = 'x';
demoo[1][2] = 'x';
demoo[2][0] = 'o';
demoo[2][1] = 'x';
demoo[2][2] = 'x';


for( i=0 ; i < 3; i++){
    for(j=0;j<3;j++){
        array2[j] = j;
    }
    array1[i]=array2

}
// switch (pmarker){
//     case demoo[0][0]==demoo[0][1] && demoo[0][1]==demoo[0][2],
//          demoo[1][0]==demoo[1][1] && demoo[1][1]==demoo[1][2],
//          demoo[2][0]==demoo[2][1] && demoo[2][1]==demoo[2][2],
//          demoo[0][0]==demoo[1][0] && demoo[1][0]==demoo[2][0],
//          demoo[0][1]==demoo[1][1] && demoo[1][1]==demoo[2][1],
//          demoo[0][2]==demoo[1][2] && demoo[1][2]==demoo[2][2],
//          demoo[0][0]==demoo[1][1] && demoo[1][1]==demoo[2][2],
//          demoo[0][2]==demoo[1][1] && demoo[1][1]==demoo[2][0]

// }


console.log(demoo[0][0]==demoo[0][1] && demoo[0][1]==demoo[0][2])
console.log(demoo[1][0]==demoo[1][1] && demoo[1][1]==demoo[1][2])
console.log(demoo[2][0]==demoo[2][1] && demoo[2][1]==demoo[2][2])
console.log(demoo[0][0]==demoo[1][0] && demoo[1][0]==demoo[2][0])
console.log(demoo[0][1]==demoo[1][1] && demoo[1][1]==demoo[2][1])
console.log(demoo[0][2]==demoo[1][2] && demoo[1][2]==demoo[2][2])
console.log(demoo[0][0]==demoo[1][1] && demoo[1][1]==demoo[2][2])
console.log(demoo[0][2]==demoo[1][1] && demoo[1][1]==demoo[2][0])
// console.log(array1[0][0])
// console.log(array1[0][1]==array1[1][1]==array1[2][1])