import {Sequelize} from "sequelize";

const banco = new Sequelize('Sis_Assinaturas', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

export default banco;