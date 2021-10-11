const mysql = require('mysql')
exports.DB_connect= () => {
    const connexion = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'groupomania'
    })
    connexion.connect((error)=>{ if(error){ return error } })
    return connexion
}