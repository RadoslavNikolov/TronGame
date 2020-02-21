class GameService{
    constructor(){

    }

    gameTick(player1, player2, newPlayer1, newPlayer2, p1Points, p2Points){
        // newPlayer => recalculated player on every server tick

        if(!player1){
            player1 = newPlayer1;
        }else{
            player1.direction = newPlayer1.direction;
            player1.points = p1Points;
        }

        if(!player2){
            player2 = newPlayer2;
        }else{
            player2.direction = newPlayer2.direction;
            player2.points = p2Points;
        }
    }


    draw(provider, game, player1, player2, elementSize){
        const ctx = provider.context;
                
        ctx.clearRect(0,0, game.width, game.height);

        if(player1 && player1.points){

            ctx.beginPath();
            for (let index = 0; index < player1.points.length; index++) {
                //Calculate every rectangle(point) boundaries
                let element = player1.points[index];
                element.topLeft = {
                    'x': element.x * elementSize,
                    'y': element.y * elementSize
                }
                element.bottomRight = {
                    'x': element.topLeft.x + elementSize,
                    'y': element.topLeft.y + elementSize
                }

                //draw the rectangle
                ctx.fillStyle = player1.color;
                ctx.rect(element.topLeft.x, element.topLeft.y, elementSize, elementSize);
                ctx.fill();
            }
             ctx.closePath();
        }

        if(player2 && player2.points){

            ctx.beginPath();
            for (let index = 0; index < player2.points.length; index++) {
                //Calculate every rectangle(point) boundaries
                let element = player2.points[index];          
                element.topLeft = {
                    'x': element.x * elementSize,
                    'y': element.y * elementSize
                }
                element.bottomRight = {
                    'x': element.topLeft.x + elementSize,
                    'y': element.topLeft.y + elementSize
                }
                
                //draw the rectangle
                ctx.fillStyle = player2.color;
                ctx.rect(element.topLeft.x, element.topLeft.y, elementSize, elementSize);
                ctx.fill();
            }
            ctx.closePath();
        }
    }
}

export default new GameService()