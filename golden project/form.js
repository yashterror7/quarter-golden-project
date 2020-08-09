class Form {
 constructor ()
 {this.title = createElement("h2");
  this.input = cretaeInput("Name");
  this.button = createButton("Play");
  this.greeting = createElement("h2");
}
 display(){
     this.title.html("modern RAMAYAN");
     this.title.position(200,100);
     this.input.position(200,200);
     this.button.position(300,300);

     this.button.mousePressed(()=>{
        this.button.hide();
        this.input.hide();

        player.name = this.input.value();
        playerCount++;
        player.index = playerCount;
        player.update(player.name);
        player.updateCount(playerCount);
        this .greeting.html("hello u are going to enter the life of "+ player.name)
        this .greeting.position(200,100);

      });
 }


}