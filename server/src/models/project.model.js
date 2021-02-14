import { DataTypes as type, Model } from 'sequelize'
import { db } from '@/config'

class ProjectModel extends Model {}

ProjectModel.init(
    {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
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

        archived: {
            type: type.TINYINT,
            defaultValue: 0,
        },
    },
    { sequelize: db, modelName: 'Project' }
)

export default ProjectModel
