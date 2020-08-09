class Game {
   constructor(){

   }
      getState (){
          var gameStateRef = database.ref('gameState');
          gameStateRef.on("value",function(data){
              gameState = data.val();
          })

          
      }

      update(state){
          database.ref('/').update({
              gameState: state
          });
  
  
        }
       start(){
          if (gameState === 0){
            player = new Player ();
            player.getCount(); 
            form = new Form()
            form.display();
          }
          playerPaddle = createSprite(390,200,10,50);
          computerpaddle = createSprite(10,200,10,50);
          ball = createSprite(200,200,10,10);
          edges = createEdgeSprites();

      }

        play(){
          form.hide();
      
          computerpaddle.y = ball.y;
          playerPaddle.y = MouseY;
          if (keyDown("space")&& gameState===0){
              ball.velocityX=-5;
               var rand = random(1,5)
               ball.velocityY = rand;
               gameState = 1;             
          }
           if (gameState === 0){
               text("press space to serve",200,300);       
           }
           ball.bounceOff(playerPaddle);
           ball.bounceOff(computerpaddle);
           ball.bounceOff(edges[2]);
           ball.bounceOff(edges[3]);

           if (ball.x >400||ball.x<0){
               if (ball.x>400){
                   compScore++
               }
               if(ball.x<0){
                   Playerscore++
               }
                ball.x=200;
                ball.y=200;
                ball.velocityX = 0;
                ball.velocityY = 0;
                gameState = 0;              
           } 
           text(Playerscore,300,30);
           text(compScore,100,30);
           if (Playerscore===5||compScore===5){
               gameState= 2;
           }
        }

}


