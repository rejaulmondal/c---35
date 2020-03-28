class Form{
    constructor(){}
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(400,100);
        var input = createInput("Name");
        var button = createButton('Play');
        var gretting = createElement('h3');
        input.position(400,250);
        button.position(520,290);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            gretting.html("Hello "+ name);
            gretting.position(130,160);
        })
    }
}