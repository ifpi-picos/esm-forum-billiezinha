const modelo = require('../../modelo.js');
const repositorioBD = require('../../repositorios/repositorioBD.js');
const bd = require('../../bd/bd_utils.js');

beforeEach(() => {
  bd.exec('DELETE FROM respostas');
  bd.exec('DELETE FROM perguntas');
  modelo.reconfig_repositorio(repositorioBD);
});

test('Cadastrar pergunta e listar', () => {
  modelo.cadastrar_pergunta('1 + 1 = ?');
  const perguntas = modelo.listar_perguntas();
  expect(perguntas.length).toBeGreaterThan(0);
  expect(perguntas[0].texto).toBe('1 + 1 = ?');
});

test('Cadastrar resposta e verificar', () => {
  modelo.cadastrar_pergunta('1 + 1 = ?');
  const perguntas = modelo.listar_perguntas();
  const id = perguntas[0].id_pergunta;
  modelo.cadastrar_resposta(id, '2');
  const respostas = modelo.get_respostas(id);
  expect(respostas[0].texto).toBe('2');
});

test('Recuperar pergunta por ID (BD)', () => {
  modelo.cadastrar_pergunta('Quanto é 5 + 5?');
  const perguntas = modelo.listar_perguntas();
  const pergunta = modelo.get_pergunta(perguntas[0].id_pergunta);
  expect(pergunta).toBeDefined();
  expect(pergunta.texto).toBe('Quanto é 5 + 5?');
});

test('Recuperar número de respostas (BD)', () => {
  modelo.cadastrar_pergunta('Quanto é 10 - 7?');
  const id = modelo.listar_perguntas()[0].id_pergunta;
  modelo.cadastrar_resposta(id, '3');
  const total = modelo.get_num_respostas(id);
  expect(total).toBe(1);
});
