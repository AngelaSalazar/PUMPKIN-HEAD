class wall{
    constructor(){
        this.row = 0
        this.col = 0
        this.index = this.createIndex()
    
    }

    createIndex(){
        return[
            ["wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall"],
            ["path","wall","wall","wall","path","wall","path","wall","wall","wall","path","path","path","path","path","path","path","wall","path","path"],
            ["path","path","path","path","path","wall","path","path","path","path","path","path","wall","wall","wall","path","wall","wall","path","path"],
            ["path","wall","path","wall","path","wall","wall","path","wall","wall","wall","path","path","path","wall","path","wall","wall","path","wall"],
            ["path","wall","path","wall","path","path","path","path","wall","path","path","wall","wall","wall","wall","path","path","path","path","wall"],
            ["wall","wall","path","wall","wall","wall","wall","wall","wall","path","wall","path","path","wall","path","path","wall","wall","path","wall"],
            ["wall","path","path","path","path","wall","path","path","path","path","path","wall","path","path","path","wall","path","path","wall","wall"],
            ["wall","path","wall","path","path","wall","path","wall","wall","wall","path","wall","wall","wall","path","wall","path","path","path","path"],
            ["wall","wall","wall","wall","path","wall","wall","wall","path","path","path","path","wall","path","path","wall","path","wall","wall","path"],
            ["path","path","path","path","path","wall","path","path","path","wall","wall","wall","wall","path","path","wall","path","path","wall","path"],
            ["wall","path","wall","wall","wall","wall","path","wall","wall","wall","path","path","wall","wall","path","path","wall","path","wall","path"],
            ["wall","path","path","path","wall","path","path","path","path","path","path","wall","wall","wall","wall","path","path","path","path","path"],
            ["path","path","wall","wall","path","wall","wall","wall","wall","wall","wall","path","path","path","path","wall","wall","path","path","wall"],
            ["path","wall","wall","path","path","path","wall","path","path","wall","wall","path","wall","wall","path","path","path","path","wall","path"],
            ["path","path","path","wall","path","wall","path","path","path","wall","path","path","wall","path","path","path","wall","wall","path","path"],
            ["wall","path","wall","wall","path","path","path","wall","path","path","path","wall","wall","wall","wall","path","path","wall","wall","path"],
            ["wall","wall","wall","path","path","wall","wall","wall","path","path","wall","path","path","path","wall","wall","path","path","path","wall"],
            ["path","path","path","path","wall","wall","path","wall","wall","wall","wall","wall","wall","path","path","wall","path","wall","wall","path"],
            ["path","wall","wall","wall","path","path","path","path","path","path","path","path","wall","path","wall","wall","path","wall","wall","wall"],
            ["path","wall","path","path","path","wall","wall","path","path","wall","wall","path","wall","path","wall","wall","wall","wall","path","wall"],
            ["path","path","path","path","path","wall","path","wall","wall","wall","wall","path","wall","path","path","path","path","path","path","wall"],
            ["wall","wall","wall","wall","path","wall","path","path","path","path","path","path","wall","wall","path","wall","path","wall","wall","wall"],
            ["path","path","path","path","path","wall","wall","path","wall","path","wall","path","path","wall","wall","wall","path","wall","path","path"],
            ["path","path","wall","path","wall","path","path","wall","wall","path","wall","path","path","path","path","path","path","wall","wall","path"],
            ["wall","wall","path","path","wall","path","path","path","path","path","wall","wall","wall","wall","wall","wall","path","wall","wall","path"],
            ["wall","wall","wall","path","path","path","wall","wall","wall","wall","wall","path","path","path","path","wall","path","wall","path","path"],
            ["path","wall","path","path","wall","wall","wall","wall","path","wall","path","path","wall","wall","wall","wall","path","wall","path","wall"],
            ["path","wall","path","wall","wall","path","wall","path","path","path","wall","path","path","path","path","path","path","path","patj","wall"],
            ["path","path","path","path","wall","path","path","path","wall","path","wall","wall","path","wall","wall","wall","path","wall","path","wall"],
            ["wall","wall","wall","path","path","wall","path","wall","wall","path","path","wall","path","path","wall","path","path","wall","path","wall"],
            ["wall","path","path","path","wall","wall","wall","wall","path","path","wall","wall","wall","path","wall","wall","wall","wall","wall","wall"],
            ["wall","wall","path","path","path","path","path","path","path","wall","wall","wall","path","path","path","path","path","path","path","path"],
            ["wall","path","path","path","wall","wall","wall","wall","path","path","path","wall","wall","path","wall","path","wall","wall","wall","path"],
            ["path","path","wall","path","wall","path","path","path","path","wall","path","path","wall","path","wall","wall","path","path","wall","wall"],
            ["path","wall","wall","wall","wall","wall","wall","wall","path","wall","wall","path","wall","wall","wall","path","path","path","path","path"],
            ["path","path","wall","wall","path","path","path","wall","wall","path","wall","path","wall","path","wall","path","wall","wall","wall","wall"],
            ["wall","path","path","path","path","wall","path","wall","path","path","path","path","path","path","path","path","path","wall","path","wall"],
            ["wall","path","wall","wall","wall","wall","path","wall","wall","wall","wall","path","wall","path","wall","wall","wall","path","path","wall"],
            ["wall","path","wall","wall","path","wall","path","wall","path","path","path","path","wall","wall","wall","path","wall","path","wall","wall"],
            ["wall","path","path","path","path","wall","path","path","wall","wall","wall","path","path","path","path","path","path","path","path","wall"],
            ["path","path","wall","wall","path","wall","wall","path","path","wall","path","path","path","wall","wall","path","wall","wall","path","wall"],
            ["wall","path","path","wall","path","path","wall","wall","path","wall","wall","wall","wall","wall","path","path","wall","path","path","wall"],
            ["wall","path","wall","wall","wall","wall","wall","path","path","wall","wall","path","path","path","path","wall","path","path","path","wall"],
            ["wall","path","path","path","path","path","wall","wall","path","path","wall","wall","wall","wall","path","path","wall","wall","path","wall"],
            ["wall","path","wall","wall","wall","wall","wall","wall","wall","path","path","path","path","wall","wall","path","wall","wall","wall","wall"],
            ["path","path","path","wall","path","wall","path","path","path","path","path","wall","wall","wall","wall","path","wall","wall","path","path"],
            ["wall","wall","wall","wall","path","wall","wall","path","wall","path","path","path","path","path","wall","path","path","path","path","path"],
            ["path","path","path","wall","path","path","path","path","wall","wall","wall","wall","path","path","wall","wall","wall","path","wall","wall"],
            ["wall","path","wall","wall","wall","wall","path","wall","wall","wall","wall","path","path","wall","wall","path","path","path","path","wall"],
            ["wall","path","wall","path","wall","path","path","wall","path","path","path","path","wall","wall","wall","wall","path","wall","wall","wall"],
            ["wall","path","path","path","wall","wall","wall","wall","path","wall","wall","wall","path","wall","path","wall","wall","wall","path","wall"],
            ["wall","wall","wall","wall","path","path","path","wall","path","wall","path","path","path","path","path","path","wall","wall","path","wall"],
            ["path","path","path","wall","path","path","path","wall","path","wall","path","wall","wall","wall","path","path","path","wall","path","wall"],
            ["wall","wall","path","wall","path","wall","path","path","path","path","path","wall","path","path","path","wall","path","wall","path","wall"],
            ["wall","wall","path","wall","path","wall","wall","wall","wall","wall","path","wall","path","wall","wall","path","wall","wall","path","wall"],
            ["wall","wall","path","path","path","wall","path","path","path","wall","path","wall","path","path","path","path","path","path","path","wall"],
            ["wall","path","path","wall","path","wall","path","wall","path","path","path","wall","path","wall","wall","wall","wall","path","wall","wall"],
            ["wall","path","wall","wall","wall","wall","path","wall","path","wall","path","wall","wall","wall","path","wall","wall","path","wall","path"],
            ["wall","path","wall","path","path","path","path","wall","path","wall","path","path","path","path","path","path","wall","path","wall","path"],
            ["wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall"],

        ]
    }

    draw(){
        for (let i=0; i<this.index.length; i++){
            for (let j=0; j<this.index[i].length; j++){
                if (this.index[i][j] === "wall"){
                    image(this.image, j*SQUARE_SIDE, i*SQUARE_SIDE, SQUARE_SIDE,SQUARE_SIDE)
                }
            }
        }
    }
}