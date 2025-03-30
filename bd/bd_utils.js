const Database = require('better-sqlite3');
const db = new Database('esmforum.db');

// Executa comandos como INSERT, DELETE, UPDATE
function exec(sql, params = []) {
  try {
    db.prepare(sql).run(params);
  } catch (e) {
    console.error('[exec] Erro SQL:', e.message);
    throw e;
  }
}

// Consulta que retorna um único resultado
function query(sql, params = []) {
  try {
    return db.prepare(sql).get(params);
  } catch (e) {
    console.error('[query] Erro SQL:', e.message);
    throw e;
  }
}

// Consulta que retorna vários resultados
function queryAll(sql, params = []) {
  try {
    return db.prepare(sql).all(params);
  } catch (e) {
    console.error('[queryAll] Erro SQL:', e.message);
    throw e;
  }
}

module.exports = { exec, query, queryAll };
