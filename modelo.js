// modelo.js

// Por padrão, usa o repositório real
let repositorio = require('./repositorios/repositorioBD.js');

// Função para configurar o repositório (injeção de dependência)
function reconfig_repositorio(novoRepositorio) {
  repositorio = novoRepositorio;
}

// Função para listar perguntas com o número de respostas anexado
function listar_perguntas() {
  const perguntas = repositorio.recuperar_todas_perguntas();
  perguntas.forEach(pergunta => {
    pergunta.num_respostas = repositorio.recuperar_num_respostas(pergunta.id_pergunta);
  });
  return perguntas;
}

// Função para cadastrar uma pergunta
function cadastrar_pergunta(texto) {
  repositorio.cadastrar_pergunta(texto);
}

// Outras funções (cadastrar_resposta, get_pergunta, etc.) seguem o mesmo padrão
function cadastrar_resposta(id_pergunta, texto) {
  repositorio.cadastrar_resposta(id_pergunta, texto);
}

function get_pergunta(id_pergunta) {
  return repositorio.get_pergunta(id_pergunta);
}

function get_respostas(id_pergunta) {
  return repositorio.get_respostas(id_pergunta);
}

function get_num_respostas(id_pergunta) {
  return repositorio.recuperar_num_respostas(id_pergunta);
}

module.exports = {
  reconfig_repositorio,
  listar_perguntas,
  cadastrar_pergunta,
  cadastrar_resposta,
  get_pergunta,
  get_respostas,
  get_num_respostas
};
