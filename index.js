buttons=document.querySelectorAll(".drum");
for(var i=0;i<buttons.length;i++)
{
    if(buttons[i].innerHTML == "w") buttons[i].addEventListener("click",function(){
       var audio=new Audio("sounds/crash.mp3")
       audio.play()
    });
    if(buttons[i].innerHTML == "a") buttons[i].addEventListener("click",function(){
        var audio=new Audio("sounds/kick-bass.mp3")
        audio.play()
    });
    if(buttons[i].innerHTML == "s") buttons[i].addEventListener("click",function(){
        var audio=new Audio("sounds/snare.mp3")
        audio.play()
    });
    if(buttons[i].innerHTML == "d") buttons[i].addEventListener("click",function(){
        var audio=new Audio("sounds/tom-1.mp3")
        audio.play()
    });
    if(buttons[i].innerHTML == "j") buttons[i].addEventListener("click",function(){
        var audio=new Audio("sounds/tom-2.mp3")
        audio.play()
    });
    if(buttons[i].innerHTML == "k") buttons[i].addEventListener("click",function(){
        var audio=new Audio("sounds/tom-3.mp3")
        audio.play()
    });
    if(buttons[i].innerHTML == "l") buttons[i].addEventListener("click",function(){
        var audio=new Audio("sounds/tom-4.mp3")
        audio.play()
    });
}