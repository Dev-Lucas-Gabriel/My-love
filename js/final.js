/* ==========================================
            CARTA
========================================== */

const mensagem = `Meu amor,

Talvez eu nunca encontre palavras suficientes para descrever o quanto você significa para mim.

Desde que você entrou na minha vida, tudo ficou mais leve, mais bonito e mais feliz.

Você é meu porto seguro, minha paz e a pessoa com quem quero compartilhar todos os momentos da minha vida.

Obrigado por existir.

Eu te amo infinitamente. ❤️

(depois que terminar de ver o site, pode entrar no seu quarto! Espero que goste da surpresa!!)`;

const textoCarta = document.getElementById("textoCarta");
const envelope = document.getElementById("envelope");

let iniciou = false;

envelope.addEventListener("click", () => {

    if(iniciou) return;

    iniciou = true;

    envelope.classList.add("aberto");

    let i = 0;

    function escrever(){

        if(i < mensagem.length){

            textoCarta.innerHTML += mensagem.charAt(i);

            i++;

            setTimeout(escrever,25);

        }

    }

    setTimeout(escrever,700);

});


/* ==========================================
            CONTADOR
========================================== */

// ALTERE ESTA DATA

const salvo = localStorage.getItem("inicioNamoro");

const dataInicio = salvo
    ? new Date(salvo)
    : new Date();

const tempo = document.getElementById("tempo");

function atualizarContador(){

    const agora = new Date();

    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000*60*60*24));

    const horas = Math.floor(diff/(1000*60*60))%24;

    const minutos = Math.floor(diff/(1000*60))%60;

    const segundos = Math.floor(diff/1000)%60;

    tempo.innerHTML = `

    <div class="bloco">
        <div class="numero">${dias}</div>
        <div class="label">Dias</div>
    </div>

    <div class="bloco">
        <div class="numero">${horas}</div>
        <div class="label">Horas</div>
    </div>

    <div class="bloco">
        <div class="numero">${minutos}</div>
        <div class="label">Minutos</div>
    </div>

    <div class="bloco">
        <div class="numero">${segundos}</div>
        <div class="label">Segundos</div>
    </div>

    `;

}

setInterval(atualizarContador,1000);

atualizarContador();


/* ==========================================
            PARTÍCULAS
========================================== */

const particles = document.getElementById("particles");

setInterval(()=>{

    const p = document.createElement("span");

    p.className="particle";

    const size = Math.random()*5+2;

    p.style.width=size+"px";
    p.style.height=size+"px";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(6+Math.random()*6)+"s";

    particles.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },12000);

},250);


/* ==========================================
            CHUVA DE CORAÇÕES
========================================== */

const hearts = document.getElementById("hearts");

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="-50px";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.pointerEvents="none";

    heart.style.animation="cair 7s linear forwards";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

},350);


/* ==========================================
        AUTO SCROLL GALERIA
========================================== */

const slider=document.querySelector(".slider");

let pos=0;

setInterval(()=>{

    pos+=360;

    if(pos>=slider.scrollWidth-slider.clientWidth){

        pos=0;

    }

    slider.scrollTo({

        left:pos,

        behavior:"smooth"

    });

},3500);


/* ==========================================
        FOGOS DE ARTIFÍCIO
========================================== */

const canvas=document.getElementById("fogos");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});

let fireworks=[];

function criarFogo(){

    const x=Math.random()*canvas.width;

    const y=Math.random()*canvas.height/2;

    for(let i=0;i<60;i++){

        fireworks.push({

            x,

            y,

            dx:(Math.random()-0.5)*8,

            dy:(Math.random()-0.5)*8,

            life:100

        });

    }

}

setInterval(criarFogo,1800);

function animarFogos(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    fireworks.forEach((f,index)=>{

        ctx.beginPath();

        ctx.arc(f.x,f.y,2,0,Math.PI*2);

        ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

        ctx.fill();

        f.x+=f.dx;

        f.y+=f.dy;

        f.dy+=0.03;

        f.life--;

        if(f.life<=0){

            fireworks.splice(index,1);

        }

    });

    requestAnimationFrame(animarFogos);

}

animarFogos();


/* ==========================================
        EXPLOSÃO FINAL
========================================== */

document.getElementById("explodir").addEventListener("click",()=>{

    for(let i=0;i<250;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML="❤️";

            heart.style.position="fixed";

            heart.style.left="50%";

            heart.style.top="50%";

            heart.style.fontSize=(18+Math.random()*25)+"px";

            heart.style.pointerEvents="none";

            heart.style.transform=`
                translate(
                    ${(Math.random()-0.5)*900}px,
                    ${(Math.random()-0.5)*900}px
                )
            `;

            heart.style.transition="2s";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.style.opacity="0";

            },50);

            setTimeout(()=>{

                heart.remove();

            },2000);

        },i*8);

    }

    alert("❤️ Eu te amo infinitamente! ❤️");

});