export class Matrix {
    private inputMatrix:string;

  constructor(inputMatrix:string) {
      this.inputMatrix = inputMatrix
  }

  get rows() {
    return this.inputMatrix.split("\n").map(row=>row.split(" ").map(Number))
  }

  get columns():number[][] {
     return this.rows[0].map((value,colIndex) =>
      this.rows.map(row => row[colIndex])
    );
  }
}
const m = new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6')
const matrixArray= m.rows; 
const matrixArrayCol= m.columns; 


console.log(matrixArray)
console.log(matrixArrayCol)