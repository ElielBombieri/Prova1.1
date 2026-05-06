import { DataTypes } from "sequelize";
import banco from "../banco.js";

const Assinatura = banco.define(
    'assinaturas',{
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    cliente: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    data_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    data_validade: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    plano_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'planos',
            key: 'id'
        }
    }
    }
)

export default Assinatura;