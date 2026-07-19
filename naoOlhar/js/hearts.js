document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.35) return;

    const heart=document.createElement("span");

    heart.className="mouseHeart";

    heart.innerHTML="❤️";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },900);

});