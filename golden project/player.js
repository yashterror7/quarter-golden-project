class Player{
   constructor(){
     this.index = null;
   }
getCount(){
    var countRef = database.ref('playerCount');
     countRef .on ("value",(data)=>{
        playerCount = data.val();
     })   
}
updateCount(count){
    database.ref('/').update({
        playerCount : count
    });
}
update(name){
    var playerIndex = "players/player"+ this.index;
    database.ref(playerIndex).set({
        name:name
    });
}

}