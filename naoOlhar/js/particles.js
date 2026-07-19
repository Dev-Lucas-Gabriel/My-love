function criarParticula(){

    const p=document.createElement("span");

    p.className="particle";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(6+Math.random()*6)+"s";

    p.style.opacity=Math.random();

    p.style.width=(2+Math.random()*5)+"px";

    p.style.height=p.style.width;

    document.body.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },12000);

}

setInterval(criarParticula,250);