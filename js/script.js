class Game {

    constructor() {
      this.player = new Player()
      
/*       this.badGuy = new badGuy()
      this.Candy = new Candy()  */
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
/*       this.Candy.image = loadImage('../Images/Candy.png')
      this.badGuy.image = loadImage('../Images/BadGuy.png')  */
      this.Win.image = loadImage("../Images/Candy.png")
  }


  draw() {
    clear()
    stroke("#283618")
    this.drawGrid()
    this.player.draw()
    this.wall.draw()


/*     this.badGuy.drawBadGuy()
    this.Candy.drawCandy()  */
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
    if (dist(this.col, this.row, game.player.col, game.player.row) < 50) {
      document.querySelector("h2").classList.remove("hidden")
      console.log("hi")
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
        this.wall = new wall() 
    }

    draw() {
      image(this.image, this.col, this.row, 50, 50)
    }     

    moveRight(){
      if (this.moveRightPossible){
        if (this.col <= 850){
          this.col += 50
        }

        console.log(this.col)
        this.image=this.imageRight
        this.checkPossibleMoves()
/*         game.badGuy.collision()
        game.Candy.collision() */
      }
    }

    moveLeft(){
      if (this.moveLeftPossible){
        if (this.col >= 50){
          this.col -=50
        }
  
        this.image=this.imageLeft
        this.checkPossibleMoves()
/*         game.badGuy.collision()
        game.Candy.collision() */
      }
    }

    moveUp(){
      if (this.moveUpPossible){
        if (this.row >= 50){
          this.row -= 50
        }
  
        this.image=this.imageUp
        this.checkPossibleMoves()
/*         game.badGuy.collision()
        game.Candy.collision() */
      }
    }

    moveDown(){
        if (this.moveDownPossible){
        if (this.row <= 2900){
          this.row += 50
        }
  
        this.image=this.imageDown
        this.checkPossibleMoves()
/*         game.badGuy.collision()
        game.Candy.collision() */
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



/* class badGuy{
  constructor(){
    this.col = 0
    this.row = 0
    this.setRandomPosition()
  }

  setRandomPosition() {
      this.col = (Math.floor(Math.random() * 20)) * 50
      this.row = (Math.floor(Math.random() * 60)) * 50
 }

  drawBadGuy() {
      image(this.image, this.col, this.row, 50, 50)
  }

  collision() {
    if (dist(this.col, this.row, game.player.col, game.player.row) < 50) {
    this.setRandomPosition()
    }
  }
} */

/* class Candy{
  constructor(){
    this.col = 100
    this.row = 2900
    this.setRandomPosition()
  }

  setRandomPosition() {
      this.col = Math.floor(Math.random() * 10) * 100
      this.row = Math.floor(Math.random() * 10) * 100
 }

  drawCandy() {
      image(this.image, this.col, this.row, 50, 50)
  }

  collision() {
    if (dist(this.col, this.row, game.player.col, game.player.row) < 50) {
    this.setRandomPosition()
    }
  }

} */