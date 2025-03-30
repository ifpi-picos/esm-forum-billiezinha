const modelo = require('../modelo.js');
const repositorioMemoria = require('../repositorios/repositorioMemoria.js');

beforeEach(() => {
  modelo.reconfig_repositorio(repositorioMemoria);
  repositorioMemoria.reset(); // Limpa os dados antes de cada teste
});

test('Testando banco de dados vazio', () => {
  const perguntas = modelo.listar_perguntas();
  expect(perguntas.length).toBe(0);
});

test('Testando cadastro de três perguntas', () => {
  modelo.cadastrar_pergunta('1 + 1 = ?');
  modelo.cadastrar_pergunta('2 + 2 = ?');
  modelo.cadastrar_pergunta('3 + 3 = ?');
  const perguntas = modelo.listar_perguntas();
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('1 + 1 = ?');
  expect(perguntas[2].num_respostas).toBe(0);
});
