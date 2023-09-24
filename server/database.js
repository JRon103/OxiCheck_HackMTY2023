const databaseConfig = require('./config/database.config');
const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: databaseConfig.host, 
     user: databaseConfig.user, 
     password: databaseConfig.password,
     database: databaseConfig.database,
     connectionLimit: 5
});

// Función para probar la conexión
async function testConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log('Conexión a la base de datos establecida correctamente.');

    // Realiza una consulta de prueba
    const rows = await conn.query('SELECT 1 as result');
    if (rows[0].result === 1) {
      console.log('La consulta de prueba fue exitosa.');
    } else {
      console.error('La consulta de prueba no fue exitosa.');
    }
  } catch (err) {
    console.error('Error al establecer la conexión:', err);
  } finally {
    if (conn) {
      conn.release(); // Devuelve la conexión al pool
    }
  }
}

// Se llama a la función para probar la conexión
testConnection();

module.exports = pool;