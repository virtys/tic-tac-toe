class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.gameField = [
            [null,null,null], // row with 3 column
            [null,null,null],
            [null,null,null]
        ];
        this.state = "game";
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.getFieldValue(rowIndex,columnIndex) && !this.isFinished()) {

            this.gameField[rowIndex][columnIndex] = this.currentPlayer;

            if(this.checkWinner()) {
                this.winner = this.currentPlayer;
                this.currentPlayer = this.getCurrentPlayerSymbol() === "x" ? "o" : "x";
                this.state = "finished";
            }
            else if(this.noMoreTurns()) {
                this.state = "draw";
                this.currentPlayer = this.getCurrentPlayerSymbol() === "x" ? "o" : "x";
            }
            else {
                this.currentPlayer = this.getCurrentPlayerSymbol() === "x" ? "o" : "x";
            }


        }
    }

    checkWinner() {
        let winStr = this.currentPlayer+this.currentPlayer+this.currentPlayer;
        //check diagonals
        let diagonal1 = this.getFieldValue(0,0)+this.getFieldValue(1,1)+this.getFieldValue(2,2);
        let diagonal2 = this.getFieldValue(0,2)+this.getFieldValue(1,1)+this.getFieldValue(2,0);
        if(diagonal1 === winStr || diagonal2 === winStr) return this.currentPlayer;
        //check row and columns
        for(let row = 0; row<3; row++) {
            let checkedStr = "";
            let checkedStr2 = "";
            for(let col = 0; col<3; col++) {
                checkedStr+=this.getFieldValue(row,col);
                checkedStr2+=this.getFieldValue(col,row);
            }
            if(checkedStr === winStr || checkedStr2 === winStr) return this.currentPlayer;
        }


        return false;
    }

    isFinished() {
        return this.isDraw() || this.state === "finished";
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for(let row = 0; row<3; row++) {
            for(let col = 0; col<3; col++) {
                if(!this.getFieldValue(row,col)) return false;
            }
        }

        return true;
    }

    isDraw() {
        return this.state === "draw";
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
