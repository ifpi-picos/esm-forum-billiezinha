const modelo = require('../../modelo.js');
const repositorioMemoria = require('../../repositorios/repositorioMemoria.js');

beforeEach(() => {
  modelo.reconfig_repositorio(repositorioMemoria);
  repositorioMemoria.reset();
});

test('Cadastrar 1 pergunta', () => {
  modelo.cadastrar_pergunta('1 + 1 = ?');
  const perguntas = modelo.listar_perguntas();
  expect(perguntas.length).toBe(1);
  expect(perguntas[0].texto).toBe('1 + 1 = ?');
});

test('Cadastrar resposta', () => {
  modelo.cadastrar_pergunta('1 + 1 = ?');
  modelo.cadastrar_resposta(1, '2');
  const respostas = modelo.get_respostas(1);
  expect(respostas.length).toBe(1);
  expect(respostas[0].texto).toBe('2');
});

test('Recuperar pergunta por ID (Memória)', () => {
  modelo.cadastrar_pergunta('Qual a capital da França?');
  const pergunta = modelo.get_pergunta(1);
  expect(pergunta).toBeDefined();
  expect(pergunta.texto).toBe('Qual a capital da França?');
});

test('Recuperar número de respostas (Memória)', () => {
  modelo.cadastrar_pergunta('Qual a capital da Alemanha?');
  modelo.cadastrar_resposta(1, 'Berlim');
  const total = modelo.get_num_respostas(1);
  expect(total).toBe(1);
});
