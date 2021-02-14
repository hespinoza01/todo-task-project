import { DataTypes as type, Model } from 'sequelize'
import { db } from '@/config'

class TaskModel extends Model {}

TaskModel.init(
    {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        title: {
            type: type.STRING,
            allowNull: false,
        },

        description: {
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
    { sequelize: db, modelName: 'Task' }
)

export default TaskModel
