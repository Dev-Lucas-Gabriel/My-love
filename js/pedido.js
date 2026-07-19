
const titulo = document.getElementById("titulo");

const texto = document.getElementById("texto");

const pergunta = "Você aceita namorar comigo? ❤️";

let i = 0;

function escrever() {

    if (i < pergunta.length) {

        titulo.innerHTML += pergunta.charAt(i);

        i++;

        setTimeout(escrever, 80);

    }

}

escrever();

texto.innerHTML = "Prometo cuidar de você, respeitar você, apoiar seus sonhos e fazer de tudo para te ver feliz todos os dias da minha vida.";

const btnNao = document.getElementById("nao");

// posição inicial
btnNao.style.position = "fixed";
btnNao.style.left = "63vw";
btnNao.style.top = "72vh";

btnNao.addEventListener("mouseenter", moverBotao);

function moverBotao() {

    const margem = 20;

    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;

    const maxX = window.innerWidth - larguraBotao - margem;
    const maxY = window.innerHeight - alturaBotao - margem;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // garante que nunca fique menor que a margem
    x = Math.max(margem, Math.min(x, maxX));
    y = Math.max(margem, Math.min(y, maxY));

    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
}

const btnSim = document.getElementById("sim");

btnSim.addEventListener("click", () => {

    localStorage.setItem(
        "inicioNamoro",
        new Date().toISOString()
    );

    const intervalo = chuva();

    setTimeout(() => {

        clearInterval(intervalo);

        window.location.href = "final.html";

    }, 3000);

});

function chuva() {

    setInterval(() => {

        const heart = document.createElement("span");

        heart.className = "coracao";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 5000);

    }, 120);

}