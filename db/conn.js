const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts2', 'root', 'rodrigo220391@R', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
