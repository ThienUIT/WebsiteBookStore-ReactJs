const mysql =  require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '123456',
    user: 'root',
    database: 'bookstore',
    host: 'localhost',
    port: '3306'
})

// let bookstoredb = {};

// bookstoredb.all = (query) =>{
    
//     return new Promise((resolve, reject)=>{

//         pool.query(query,(err, results)=>{

//             if(err) {
//                 return reject(err)
//             }
            
//             else{
//                 return resolve(results)
//             }

//         })

//     })
// }

// bookstoredb.one = (query,id) =>{

//     return new Promise((resolve, reject)=>{

//         pool.query(query,[id],(err, results)=>{

//             if(err){

//                 return reject(err)

//             }
//             return resolve(results)

//         })

//     })

// }

module.exports = pool;