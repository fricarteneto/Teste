const pg = require('pg')

const db = new pg.Client({
    database: 'node_postgres_db',
    password: '',
    user: 'ricarte'
})

db.connect()

const UserDAO = {
   insert: function(usuario, callback){
   return db.query('insert into usuarios (nome,senha) values ($1, $2) returning id', [usuario.nome, usuario.senha], function(err, result){
        if(err){
            console.error(err)
            //return false
        }else{
            //return true
            callback(result.rows[0].id)
        }
    })
   },

   getAll: function(callback){
    db.query('select * from usuarios', function(err, res){
        if(err){
            console.error(err)
            callback([])
        }else{
            callback(res.rows)
        }
    })
   }
}

UserDAO.insert({nome: 'aew', senha:'12t5'}, function(id){
    console.info(id)
})

UserDAO.getAll(function(usuarios){
    for(let i = 0; i < usuarios.length; i++){
        console.info(usuarios[i])
    }
})

