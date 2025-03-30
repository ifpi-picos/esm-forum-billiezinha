const modelo = require('../modelo.js');

// Cria um mock com a interface esperada pelo modelo (repositório)
var mock_bd = {};

// Quando o modelo chama recuperar_todas_perguntas, retorne a lista fixa de perguntas
mock_bd.recuperar_todas_perguntas = jest.fn().mockReturnValue(
  [ 
    { "id_pergunta": 1, "texto": "Qual a capital de MG?", "id_usuario": 1 },
    { "id_pergunta": 2, "texto": "Qual a capital de RJ?", "id_usuario": 1 },
    { "id_pergunta": 3, "texto": "Qual a capital de SP?", "id_usuario": 1 }
  ]
);

// Quando o modelo chama recuperar_num_respostas, retorne os valores 5, 10 e 15, respectivamente
mock_bd.recuperar_num_respostas = jest.fn()
  .mockReturnValueOnce(5)
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(15);
  
// Reconfigura o modelo para usar esse mock como repositório
modelo.reconfig_repositorio(mock_bd);

test('Testando listar três perguntas', () => {
  const perguntas = modelo.listar_perguntas();
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('Qual a capital de MG?');
  expect(perguntas[1].texto).toBe('Qual a capital de RJ?');
  expect(perguntas[2].texto).toBe('Qual a capital de SP?');
  expect(perguntas[0].num_respostas).toBe(5);
  expect(perguntas[1].num_respostas).toBe(10);
  expect(perguntas[2].num_respostas).toBe(15);
});
