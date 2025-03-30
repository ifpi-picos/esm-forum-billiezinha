// repositorios/repositorioMemoria.js

// Variáveis para armazenar dados em memória
let perguntas = [];
let respostas = [];

const repositorioMemoria = {
  recuperar_todas_perguntas() {
    return perguntas;
  },
  recuperar_num_respostas(id_pergunta) {
    return respostas.filter(r => r.id_pergunta === id_pergunta).length;
  },
  cadastrar_pergunta(texto) {
    const novoId = perguntas.length > 0 ? perguntas[perguntas.length - 1].id_pergunta + 1 : 1;
    perguntas.push({ id_pergunta: novoId, texto, id_usuario: 1 });
  },
  cadastrar_resposta(id_pergunta, texto) {
    respostas.push({ id_pergunta, texto });
  },
  get_pergunta(id_pergunta) {
    return perguntas.find(p => p.id_pergunta === id_pergunta);
  },
  get_respostas(id_pergunta) {
    return respostas.filter(r => r.id_pergunta === id_pergunta);
  },
  // Função para reiniciar os dados (útil para testes)
  reset() {
    perguntas = [];
    respostas = [];
  }
};

module.exports = repositorioMemoria;
