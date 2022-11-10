const estilos = {
  normal: "normal",
  monetario: "monetario",
  porcentagem: "porcentagem",
  agraria: "agraria",
};

function porExtenso(numero, estilo = estilos.normal) {
  if (!estilos[estilo])
    throw new Error(
      `Estilo "${estilo}" inválido. Possíveis valores: normal, monetario, porcentagem`
    );

  return require("./lib/estilos/" + estilo)(numero);
}

function formataNumero(valor) {
  let formatado = new Intl.NumberFormat("id").format(valor);
  return formatado;
}

function formataMoeda(valor){
  return valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
}

//Retorna um extensão de um caminho

function getExtensao(filename) {
  var parts = filename.split(".");
  return parts[parts.length - 1];
}

module.exports = {
  porExtenso,
  formataNumero,
  getExtensao,
  formataMoeda,
  estilo: estilos,
};
