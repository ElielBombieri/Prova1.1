import { DataTypes } from "sequelize";
import banco from "../banco.js";

const Plano = banco.define(
    "planos", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        duracao_meses: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)


export default Plano;