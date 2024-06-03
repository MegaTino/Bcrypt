const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db_log', 'root', 'senai', {
    host: "localhost",
    dialect: "mysql"
})

// sequelize.authenticate()
//     .then(() => {
//         console.log("Banco de dados conectado シ")
//     }).catch((err)=>{
//         console.error("Falha ao conectar com o banco de dados!",err)
//     })

module.exports = sequelize