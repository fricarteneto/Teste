const pg = require('pg')

const db = new pg.Client({
    database: 'node_postgres_db',
    password: '',
    user: 'ricarte'
})

db.connect()

db.query('select now()', function(err, result){
    if(err){
        console.error(err)
    }else{
        console.log(result.rows[0].now)
    }
})

const values = [10,20]

db.query('select $1::integer + $2::integer as num', values, function(err, result){
    if(err){
        console.error(err)
    }else{
        console.log(result.rows[0].num)
    }
})
/*
db.query('insert into usuarios (nome,senha) values ($1, $2) returning id', ['ricarte', '12345'], function(err, result){
    if(err){
        console.error(err)
    }else{
        console.log(result.rows[0].id)
    }
})
*/
db.query('select * from usuarios', function(err, result){
    if(err){
        console.error(err)
    }else{
        for(let i = 0; i < result.rows.length; i++){
            console.log(result.rows[i])
        }
    }
})