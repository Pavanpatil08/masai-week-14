import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.css";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      board : Array(9).fill(null),
      player :"X"
    }
  }
   
   checkWinner(){
    let winLines = 
    [
       ["0","1","2"],
       ["3","4","5"],
       ["6","7","8"],
       ["0","3","6"],
       ["1","4","7"],
       ["2","5","8"],
       ["0","4","8"],
       ["2","4","6"]
    ]
    for (let index=0; index<winLines.length;index++){
      const [a,b,c] = winLines[index];
      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        alert("you won");
      }
   }
 }
  handleClick(index){
    let newBoard = this.state.board
    if(this.state.board[index]===null){

    newBoard[index] = this.state.player
    this.setState({
      board : newBoard,
      player : this.state.player === "X" ? "0" : "X"
    })
    this.checkWinner()
    }       
  }
  render(){
  const Box = this.state.board.map(
    (box,index) => 
    <div className="box" key={index} 
    onClick={(e)=>this.handleClick(index)}>
    {box}
    </div>
    )
  return (
    <div class="container">
      <h1> Tic Tac Toe App </h1>   
       <div class="mt-4,mb-4">
       <div className="board">
        {Box}       
       </div>
     </div>
    </div>
  );
}
}

export default App;