import { DataTypes as type, Model } from 'sequelize'
import { db } from '#config'

class UserModel extends Model {}

UserModel.init(
    {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullname: {
            type: type.STRING,
            allowNull: false,
        },
        email: {
            type: type.STRING(100),
            allowNull: false,
            unique: true,
        },
        password: {
            type: type.STRING,
            allowNull: false,
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
        },
    },
    { sequelize: db, modelName: 'User' }
)

export default UserModel
