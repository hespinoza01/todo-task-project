import { DataTypes as type, Model } from 'sequelize'
import { db } from '@/config'

class TaskStateModel extends Model {}

TaskStateModel.init(
    {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        description: {
            type: type.STRING(100),
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: 'TaskState',
    }
)

export default TaskStateModel
