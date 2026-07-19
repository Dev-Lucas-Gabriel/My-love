const mensagem = `Antes de fazer uma das perguntas mais importantes da minha vida, gostaria de falar com o senhor.

Sua filha é uma pessoa incrível, que conquistou meu carinho, respeito e admiração.

Meu maior desejo é cuidar dela, fazê-la sorrir e construir uma linda história ao lado dela.

Por isso, venho humildemente pedir sua autorização para namorar sua filha. Você permite que eu faça sua filha a mulher 

mais feliz do mundo?.


`;

const texto = document.getElementById("texto");


let i = 0;

function escrever() {

    if (i < mensagem.length) {

        texto.innerHTML += mensagem.charAt(i);

        i++;

        setTimeout(escrever, 28);

    }

}

escrever();

const frases = [

    "🥸 Não",

    "Tem certeza? 🤨",

    "Pensa melhor 🥺",

    "Olha o botão verde 👉",

    "Não faz isso 😭",

    "Última chance 🙏",

    "Vai de SIM ❤️"

];

let indice = 0;

const btnNao = document.getElementById("nao");
const btnSim = document.getElementById("sim");
const glass = document.querySelector(".glass");

// O .glass usa backdrop-filter, o que transforma qualquer elemento
// filho com position:fixed em "fixed relativo ao .glass".
// Movendo o botão para o body garantimos que fixed = relativo à janela,
// então os cálculos com window.innerWidth/innerHeight funcionam.
if (btnNao.parentElement !== document.body) {
    document.body.appendChild(btnNao);
}

btnNao.style.position = "fixed";
btnNao.style.left = "65%";
btnNao.style.top = "70%";
btnNao.style.zIndex = "9999";

function numeroEntre(valor, minimo, maximo) {
    return Math.max(minimo, Math.min(valor, maximo));
}

function manterBotaoDentroDaTela() {
    const margem = 20;
    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;

    const minX = margem;
    const minY = margem;
    const maxX = Math.max(minX, window.innerWidth - larguraBotao - margem);
    const maxY = Math.max(minY, window.innerHeight - alturaBotao - margem);

    const posicaoAtual = btnNao.getBoundingClientRect();

    btnNao.style.left = `${numeroEntre(posicaoAtual.left, minX, maxX)}px`;
    btnNao.style.top = `${numeroEntre(posicaoAtual.top, minY, maxY)}px`;
}

function fugirDentroDaTela() {

    const margem = 20;

    indice++;

    if (indice >= frases.length) {
        indice = 0;
    }

    // Troca o texto antes de calcular, porque frases maiores mudam o tamanho do botão.
    btnNao.innerHTML = frases[indice];

    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;

    const minX = margem;
    const minY = margem;
    const maxX = Math.max(minX, window.innerWidth - larguraBotao - margem);
    const maxY = Math.max(minY, window.innerHeight - alturaBotao - margem);

    let x = minX + Math.random() * (maxX - minX);
    let y = minY + Math.random() * (maxY - minY);

    x = numeroEntre(x, minX, maxX);
    y = numeroEntre(y, minY, maxY);

    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;

    manterBotaoDentroDaTela();

}

btnNao.addEventListener("mouseenter", fugirDentroDaTela);
btnNao.addEventListener("touchstart", (event) => {
    event.preventDefault();
    fugirDentroDaTela();
});

window.addEventListener("resize", manterBotaoDentroDaTela);
window.addEventListener("load", manterBotaoDentroDaTela);

if (btnSim) {
    btnSim.addEventListener("click", () => {

        const card = document.getElementById("card");
        const sucesso = document.getElementById("sucesso");

        if (card) {
            card.style.display = "none";
        }

        if (sucesso) {
            sucesso.style.display = "flex";
        }

        if (typeof chuva === "function") {
            chuva();
        }

        setTimeout(() => {
            window.location.href = "pedido.html";
        }, 4000);

    });
}