// import models for sync
import { UserModel, ProjectModel, TaskStateModel, TaskModel } from '@/models'

// Initial data for TaskStateModel
const taskStates = [
    { id: 1, description: 'Pendiente' },
    { id: 2, description: 'En proceso' },
    { id: 3, description: 'Finalizado' },
]

/**
 * sync sequelize models with database
 * @param {Sequelize} sequelizeInstance
 */
export default async function (sequelizeInstance) {
    if (!sequelizeInstance || !sequelizeInstance.sync) {
        return
    }

    // Configuring model relationships
    ProjectModel.belongsTo(UserModel)
    UserModel.hasMany(ProjectModel)

    TaskModel.belongsTo(TaskStateModel)
    TaskModel.belongsTo(ProjectModel)
    ProjectModel.hasMany(TaskModel)

    // models sync
    await sequelizeInstance.sync({ alter: true })

    // Initialize models data
    if ((await TaskStateModel.count()) === 0) {
        await TaskStateModel.bulkCreate(taskStates, { validate: true })
    }

    return sequelizeInstance
}
