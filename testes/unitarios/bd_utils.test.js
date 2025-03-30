const bd = require('../../bd/bd_utils.js');

describe('bd_utils - testes de erro', () => {
  test('Erro em exec()', () => {
    expect(() => {
      bd.exec('INSERT INTO tabela_inexistente (coluna) VALUES (?)', ['valor']);
    }).toThrow(/no such table/);
  });

  test('Erro em query()', () => {
    expect(() => {
      bd.query('SELECT * FROM tabela_fake');
    }).toThrow(/no such table/);
  });

  test('Erro em queryAll()', () => {
    expect(() => {
      bd.queryAll('SELECT * FROM tabela_errada');
    }).toThrow(/no such table/);
  });
});

