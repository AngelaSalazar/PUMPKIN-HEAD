class Game {

    constructor() {
      this.player = new Player()
      
      this.wall = new wall();
      this.Win = new Win()
  }

  preload(){
      this.player.image = loadImage('../Images/FrontSide.png')
      this.wall.image = loadImage('../Images/wall2.PNG')
      
      this.player.imageUp = loadImage('../Images/BackSide.png')
      this.player.imageDown = loadImage('../Images/FrontSide.png')
      this.player.imageLeft = loadImage('../Images/LeftSide.png')
      this.player.imageRight = loadImage('../Images/RightSide.png')
      this.Win.image = loadImage("../Images/Candy.png")
  }


  draw() {
    clear()
    stroke("#283618")
    this.drawGrid()
    this.player.draw()
    this.wall.draw()
    this.Win.drawWin()
  }


  drawGrid() {
    for (let i=0; i<70; i++){
      line(i*SQUARE_SIDE, 0, i*SQUARE_SIDE, HEIGHT)
      line(0, i*SQUARE_SIDE, WIDTH, i*SQUARE_SIDE)
    }
  }

}

class Win{
  constructor(){
    this.col = 50
    this.row = 2900
  }

  drawWin(){
    image(this.image, this.col, this.row, 50,50)
  }

  collision() {
    if (dist(this.col, this.row, game.player.col, game.player.row) < 50){ 
      noLoop()
    }
  }
}


class Player{
    constructor(){
        this.col = 500
        this.row = 50
        this.imageUp
        this.imageDown
        this.imageLeft
        this.imageRight
        this.image
        this.moveRightPossible = true
        this.moveLefttPossible = true
        this.moveDowntPossible = true
        this.moveUptPossible = true
        this.wall = new wall() 
    }

    draw() {
      image(this.image, this.col, this.row, 50, 50)
    }     

    moveRight(){
      if (this.moveRightPossible){
        if (this.col <= 900){
          this.col += 50
        }

        console.log(this.col)
        this.image=this.imageRight
        this.checkPossibleMoves()
      }
    }

    moveLeft(){
      if (this.moveLeftPossible){
        if (this.col >= 50){
          this.col -=50
        }
  
        this.image=this.imageLeft
        this.checkPossibleMoves()
      }
    }

    moveUp(){
      if (this.moveUpPossible){
        if (this.row >= 50){
          this.row -= 50
        }
  
        this.image=this.imageUp
        this.checkPossibleMoves()
      }
    }

    moveDown(){
        if (this.moveDownPossible){
        if (this.row <= 2900){
          this.row += 50
        }
  
        this.image=this.imageDown
        this.checkPossibleMoves()
        game.Win.collision()
     }
    }


    checkPossibleMoves() {
      this.moveLeftPossible = this.wall.index[this.row/50][this.col/50 -1] === 'path';
      this.moveRightPossible = this.wall.index[this.row/50][this.col/50 +1] === 'path';
      this.moveDownPossible = this.wall.index[this.row/50 +1][this.col/50] === 'path';
        this.moveUpPossible = (this.wall.index[this.row/50 -1][this.col/50] === 'path');
      
    }

}



function startTimer() {
  let presentTime = document.getElementById('timer').innerHTML;
  let timeArray = presentTime.split(/[:]+/);
  let min = timeArray[0];
  let sec = Second((timeArray[1] - 1));
  console.log(sec)

  if(sec==59){
    min=min-1
  }

  if(min<0){
    return
  }

  if (min === "0" && sec === "00"){
    noLoop()
    location.href = 'loosing.html';

  }

  document.getElementById('timer').innerHTML =
  min + ":" + sec;
  let time = setTimeout(startTimer, 1000);
 
  if (dist(game.Win.col, game.Win.row, game.player.col, game.player.row) < 50){ 
    clearTimeout(time)
    location.href = 'winning.html';

    
    }
}

function Second(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec
  }; 
  if (sec < 0) {
    sec = "59"
  };
  return sec;
}

document.getElementById("timer").innerHTML = 01+":"+50
startTimer()


