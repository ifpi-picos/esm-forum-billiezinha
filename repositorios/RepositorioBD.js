const bd = require('../bd/bd_utils.js');

const repositorioBD = {
  recuperar_todas_perguntas() {
    return bd.queryAll('SELECT * FROM perguntas', []);
  },
  recuperar_num_respostas(id_pergunta) {
    const resultado = bd.query(
      'SELECT COUNT(*) as total FROM respostas WHERE id_pergunta = ?',
      [id_pergunta]
    );
    return resultado?.total || 0;
  },
  cadastrar_pergunta(texto) {
    const params = [texto, 1]; // assumindo id_usuario = 1
    bd.exec('INSERT INTO perguntas (texto, id_usuario) VALUES (?, ?)', params);
  },
  cadastrar_resposta(id_pergunta, texto) {
    bd.exec('INSERT INTO respostas (id_pergunta, texto) VALUES (?, ?)', [id_pergunta, texto]);
  },
  get_pergunta(id_pergunta) {
    return bd.query('SELECT * FROM perguntas WHERE id_pergunta = ?', [id_pergunta]);
  },
  get_respostas(id_pergunta) {
    return bd.queryAll('SELECT * FROM respostas WHERE id_pergunta = ?', [id_pergunta]);
  }
};

module.exports = repositorioBD;
