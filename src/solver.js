import { TrieDictionary } from './TrieDictionary.js';
window.onload = function () {
    let button = document.getElementById("solveButton");

    class Solver {
        constructor() {
            console.log(1);
            this.validWords = new Set();
            this.dictionary = new TrieDictionary();
            this.dictionary.fill();
            this.boardSize = 4;
            this.board = [[], [], [], []];
            for (let i = 0; i < this.boardSize; i++) {
                this.board[i].push(" ");
            }
            //add all elements to board
            this.board[0][0] = document.getElementById("A1").value;
            this.board[0][1] = document.getElementById("B1").value;
            this.board[0][2] = document.getElementById("C1").value;
            this.board[0][3] = document.getElementById("D1").value;
            this.board[1][0] = document.getElementById("A2").value;
            this.board[1][1] = document.getElementById("B2").value;
            this.board[1][2] = document.getElementById("C2").value;
            this.board[1][3] = document.getElementById("D2").value;
            this.board[2][0] = document.getElementById("A3").value;
            this.board[2][1] = document.getElementById("B3").value;
            this.board[2][2] = document.getElementById("C3").value;
            this.board[2][3] = document.getElementById("D3").value;
            this.board[3][0] = document.getElementById("A4").value;
            this.board[3][1] = document.getElementById("B4").value;
            this.board[3][2] = document.getElementById("C4").value;
            this.board[3][3] = document.getElementById("D4").value;
            console.log(11);
        }

        printValidWords() {
            console.log(this.validWords);
            let output = "Solutions:"
            for (let word of this.validWords.values()) {
                output += " " + word;
            }
            document.getElementById("solveButton").disabled = false;
            console.log(output);
            document.getElementById("outputs").innerHTML = output;
        }

        search() {
            console.log(2);
            let traversed = [];
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    traversed.push(i * 4 + j);
                    this.searchHelper(this.board[i][j], i, j, traversed);
                }
                traversed = [];
            }
        }

        searchHelper(string, row, col, traversed) {
            console.log("here");
            if (this.dictionary.exists(string) == 0) {
                return;
            } else if (this.dictionary.exists(string) == 2) {
                this.validWords.add(string);
            }
            let traversedCopy = [];

            //check down
            if (row != this.boardSize - 1 && !traversed.includes((row + 1) * this.boardSize + col)) {
                traversedCopy = traversed.slice();
                traversed.push((row + 1) * this.boardSize + col);
                this.searchHelper(string + this.board[row + 1][col], row + 1, col, traversed);
                traversed = traversedCopy.slice();
            }

            //check down-right
            if (row != this.boardSize - 1 && col != this.boardSize - 1 && !traversed.includes((row + 1) * this.boardSize + col + 1)) {
                traversedCopy = traversed.slice();
                traversed.push((row + 1) * this.boardSize + col + 1);
                this.searchHelper(string + this.board[row + 1][col + 1], row + 1, col + 1, traversed);
                traversed = traversedCopy.slice();
            }

            //check right
            if (col != this.boardSize - 1 && !traversed.includes((row) * this.boardSize + col + 1)) {
                traversedCopy = traversed.slice();
                traversed.push((row) * this.boardSize + col + 1);
                this.searchHelper(string + this.board[row][col + 1], row, col + 1, traversed);
                traversed = traversedCopy.slice();
            }

            //check up-right
            if (col != this.boardSize - 1 && row != 0 && !traversed.includes((row - 1) * this.boardSize + col + 1)) {
                traversedCopy = traversed.slice();
                traversed.push((row - 1) * this.boardSize + col + 1);
                this.searchHelper(string + this.board[row - 1][col + 1], row - 1, col + 1, traversed);
                traversed = traversedCopy.slice();
            }

            //check up
            if (row != 0 && !traversed.includes((row - 1) * this.boardSize + col)) {
                traversedCopy = traversed.slice();
                traversed.push((row - 1) * this.boardSize + col);
                this.searchHelper(string + this.board[row - 1][col], row - 1, col, traversed);
                traversed = traversedCopy.slice();
            }

            //check up-left
            if (row != 0 && col != 0 && !traversed.includes((row - 1) * this.boardSize + col - 1)) {
                traversedCopy = traversed.slice();
                traversed.push((row - 1) * this.boardSize + col - 1);
                this.searchHelper(string + this.board[row - 1][col - 1], row - 1, col - 1, traversed);
                traversed = traversedCopy.slice();
            }

            //check left
            if (col != 0 && !traversed.includes((row) * this.boardSize + col - 1)) {
                traversedCopy = traversed.slice();
                traversed.push((row) * this.boardSize + col - 1);
                this.searchHelper(string + this.board[row][col - 1], row, col - 1, traversed);
                traversed = traversedCopy.slice();
            }

            //check down-left
            if (row != this.boardSize - 1 && col != 0 && !traversed.includes((row + 1) * this.boardSize + col - 1)) {
                traversedCopy = traversed.slice();
                traversed.push((row + 1) * this.boardSize + col - 1);
                this.searchHelper(string + this.board[row + 1][col - 1], row + 1, col - 1, traversed);
                traversed = traversedCopy.slice();
            }
        }
    }


    button.onclick = function solve() {
        document.getElementById("solveButton").disabled = true;
        //let dictionary = new TrieDictionary();
        //dictionary.fill();

        let solver = new Solver();
        setTimeout(function () {
            solver.search();
        }, 12000);
        setTimeout(function () {
            solver.printValidWords();
        }, 17000);
    }

    function test(solver) {
        console.log(solver.dictionary.exists("af"));
    }
};