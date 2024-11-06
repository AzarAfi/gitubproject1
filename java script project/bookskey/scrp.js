var en=confirm("are you play the game")
if(en===true){
    var eyn=prompt("ennter your name")
    if(eyn){
        console.log(eyn ?? "you didn enter your name")
    }
    else{
        console.log("you didn enter name")
    }
}
else{
    console.log(alert("when you get time you can try this game"))
}
