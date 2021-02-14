import { DataTypes as type, Model } from 'sequelize'
import { db } from '@/config'

class UserModel extends Model {
    /**
     * Search user register by email
     * @param {String} email - email user to search
     * @return {Object|null}
     */
    static async findByEmail(email) {
        const result = await UserModel.findOne({ where: { email } })

        if (result) {
            return result.dataValues
        }

        return result
    }
}

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
