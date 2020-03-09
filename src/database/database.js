import Sequelize from "sequelize";

/*Creando una instancia del ORM, la cual recibe como parametro la base de datos a la cual se conecta
    el usuario, la contraseña y un objeto de configuración en el que se le pasa, el host, el dialect es 
    para que sepa a que tipo de base de datos se conecta, el pool que es para configurar los hilos
    de ejecución
*/
export const sequelize = new Sequelize("postgres", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
