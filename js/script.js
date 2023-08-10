// Ativar link
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }

  console.log(url);
  console.log(href);
}

links.forEach(ativarLink);

// Ativar Items do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProtudo(parametros) {
  const elemento = document.getElementById(parametros);
  elemento.checked = true;
  console.log(elemento);
}

parametros.forEach(ativarProtudo);
