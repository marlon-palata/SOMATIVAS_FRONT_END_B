// Missão 1: Recepção do Espectador
let horaAtual = new Date().getHours();
let saudacao = document.querySelector("#saudacao-cinema");

if (horaAtual < 12) {
  saudacao.textContent = "Bom dia! Bem-vindo à Sessão Matinê!";
} else if (horaAtual < 18) {
  saudacao.textContent = "Boa tarde! Sessão da Tarde liberada!";
} else {
  saudacao.textContent = "Boa noite! Prepare-se para a Sessão Coruja!";
}

// Missão 2: Sala VIP
let bannerVip = document.querySelector("#banner-vip");

bannerVip.addEventListener("mouseover", function () {
  bannerVip.classList.add("modo-vip");
});

bannerVip.addEventListener("mouseout", function () {
  bannerVip.classList.remove("modo-vip");
});

// Missão 3: Bilheteria Express
let qtdIngressos = document.querySelector("#qtd-ingressos");
let totalPagar = document.querySelector("#total-pagar");

qtdIngressos.addEventListener("input", function () {
  totalPagar.textContent = Number(qtdIngressos.value) * 35;
});

// Missão 4: Mural de Críticas
let btnPublicar = document.querySelector("#btn-publicar");
let nomeFilme = document.querySelector("#nome-filme");
let muralCriticas = document.querySelector("#mural-criticas");

btnPublicar.addEventListener("click", function () {
  muralCriticas.innerHTML +=
    '<article class="card-critica"><h3>🎬 Filme: ' +
    nomeFilme.value +
    " ⭐</h3></article>";
});

// Missão 5: Apagar o Quadro
let btnApagar = document.querySelector("#btn-apagar");

btnApagar.addEventListener("click", function () {
  muralCriticas.innerHTML = "";
  nomeFilme.focus();
});
