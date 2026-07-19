const audio=document.getElementById("music");

const botao=document.getElementById("musicButton");

let tocando=false;

botao.addEventListener("click",()=>{

    if(tocando){

        audio.pause();

        botao.innerHTML="🔇 Música";

    }

    else{

        audio.play();

        botao.innerHTML="🔊 Música";

    }

    tocando=!tocando;

});