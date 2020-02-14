import mysql from 'promise-mysql';

const conexion = {
    database:{
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'erasmus',
        port: 3306
    }
}

const pool = mysql.createPool(conexion.database);
pool.getConnection().then(Connection => {
    pool.releaseConnection(Connection);
    console.log("BD conectada");
});
export default pool;