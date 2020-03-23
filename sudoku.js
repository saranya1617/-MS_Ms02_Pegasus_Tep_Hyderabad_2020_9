/*
Problem Statement
Sudoku is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 sub-grids that compose the grid (also called "boxes") contains the digits from 1 to 9.
Generally, a puzzle provides a partial solution so that some squares already have numbers. To solve the puzzle, we need to fill in the unsolved squares, as demonstrated in Figure 1.
By the end of this challenge we'll have a fully functioning Sudoku solver that runs from the command line. We'll be presented with 9x9 unsolved Sudoku puzzle grid. The puzzles grid can be found in the file sudoku_puzzles.txt.
Sudoku Solver is basically your code that takes your input and produces output mathematically
Input: format Space separated given numbers in the grid ( 0 for empty place ) 
Sample Input:
0 0 0 2 6 0 7 0 1
6 8 0 0 7 0 0 9 0
1 9 0 0 0 4 5 0 0
8 2 0 1 0 0 0 4 0
0 0 4 6 0 2 9 0 0
0 5 0 0 0 3 0 2 8
0 0 9 3 0 0 0 7 4
0 4 0 0 5 0 0 3 6
7 0 3 0 1 8 0 0 0
Output: format 9x9 sudoku grid
A complete solution to this challenge take Input 9x9 and produce output grid 9x9
*/

function sudoku(initialInput) {
    var initObj = {}, tempObj, iter = 81;
    while(iter > 0) {
        iter = 0;
        for(var v = 0; v < initialInput.length; v++ ){
            for(var h = 0; h < initialInput.length; h++ ){
                initObj = {};
                // console.log(initialInput[v][h]);
                if(initialInput[v][h] === 0){
                    for(var i = 0; i < 9; i++){
                        if(initialInput[v][i] > 0){
                            initObj[initialInput[v][i]] = true;
                        }
                        if(initialInput[i][h] > 0){
                            initObj[initialInput[i][h]] = true;
                        }
                    }
                    for(var vBox = Math.floor(v / 3) * 3; vBox <  Math.floor(v / 3) * 3 + 3; vBox++ ){
                        for(var hBox = Math.floor(h / 3) * 3; hBox <  Math.floor(h / 3) * 3 + 3; hBox++ ){
                            if(initialInput[vBox][hBox]){
                                initObj[initialInput[vBox][hBox]] = true;
                            }
                        }
                    }
                    // console.log( initObj );
                    tempObj = Object.keys(initObj);
                    // console.log(typeof(tempObj));
                    if(tempObj.length === 8){
                        for(var j = 0; j < 10; j++){
                            // console.log(tempObj.indexOf(j.toString()) < 0);
                            if(tempObj.indexOf(j.toString()) < 0){
                                // console.log(v,h);
                                initialInput[v][h] = j;
                            }
                        }
                    }
                    else {
                        iter++;
                    }
                }
                
            }
        }
    }
    return initialInput;
}


var initialInput = [
    [0,0,0,2,6,0,7,0,1],
    [6,8,0,0,7,0,0,9,0],
    [1,9,0,0,0,4,5,0,0],
    [8,2,0,1,0,0,0,4,0],
    [0,0,4,6,0,2,9,0,0],
    [0,5,0,0,0,3,0,2,8],
    [0,0,9,3,0,0,0,7,4],
    [0,4,0,0,5,0,0,3,6],
    [7,0,3,0,1,8,0,0,0]
    ];

console.log(sudoku(initialInput));